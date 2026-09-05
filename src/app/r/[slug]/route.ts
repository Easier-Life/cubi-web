import { NextResponse, after, type NextRequest } from "next/server";
import { APPLE_PROVIDER_TOKEN, isCampaignSlug, smartLinkFor } from "@/lib/campaigns";
import { detectLocale } from "@/lib/locale-detect";
import { platformFromUserAgent, type Platform } from "@/lib/platform-detect";
import { appStoreUrl, hasAppStore, hasPlayStore, siteConfig } from "@/lib/site";

/**
 * `https://cubi.family/r/<slug>` — the link one KOL/KOC publishes.
 *
 * Records the tap, then hands the visitor to the store, tagged so the install
 * can be traced back to that creator.
 *
 * **Why this route exists instead of giving each KOL the measurement vendor's
 * own link.** A KOL's link lives inside a published video permanently, and the
 * video keeps earning views long after any vendor contract does. Firebase
 * Dynamic Links already proved what happens when the link and the vendor are
 * the same thing: on 2025-08-25 every link in every published video 404'd on
 * the same day. Owning the URL makes swapping vendors an edit to
 * `@/lib/campaigns`, and nothing already published ever breaks. (Kochava's free
 * plan also has no custom domain, so the bare vendor link would read
 * `smart.link/...` rather than `cubi.family`.)
 *
 * **The trade-off, taken deliberately.** iOS Universal Links do not fire
 * through a cross-domain 302, so a visitor who ALREADY has Cubi lands on the
 * store page rather than opening the app. For an acquisition campaign that is
 * the cheap side of the trade — the audience being measured is the one that has
 * not installed yet. This is also why `/r/*` is deliberately absent from the
 * AASA file served by `/.well-known/apple-app-site-association`.
 *
 * Depends on request headers, so it must run per-request, not be cached.
 */
export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> },
): Promise<NextResponse> {
  const { slug: raw } = await context.params;
  const slug = raw.trim().toLowerCase();
  const platform = platformFromUserAgent(request.headers.get("user-agent"));
  const locale = detectLocale(request);
  const chooser = new URL(`/${locale}/download`, request.url);

  // A malformed slug means a typo in a caption that is already published.
  // Losing the attribution is survivable; losing the install is not — send them
  // to the store untagged rather than showing an error.
  if (!isCampaignSlug(slug)) {
    return redirect(storeUrl(platform, locale, null) ?? chooser);
  }

  // after() lets the row finish writing once the redirect is already on the
  // wire, so measurement never costs the visitor latency.
  after(() => logClick(slug, platform, request));

  // On a phone, hand off to Kochava: its SmartLink carries the store
  // destinations and is the only thing that can match this click to the install
  // that follows. Desktop is deliberately excluded — the SmartLink answers a
  // desktop request with an untitled "Open in App Store" page that bounces to
  // the homepage after one second, which is worse than the chooser we already
  // serve, and a desktop visitor can never produce an attributable install
  // anyway, so nothing is lost by keeping them here.
  const vendor = platform === "ios" || platform === "android" ? smartLinkFor(slug) : null;
  if (vendor) return redirect(vendor);

  // No SmartLink for this slug: go straight to the store. Apple still counts
  // the `ct=` and Google still counts the `utm_source=`, so the campaign is
  // never invisible — only Kochava's click-to-install match is lost.
  return redirect(storeUrl(platform, locale, slug) ?? chooser);
}

/** Store URL for this platform, campaign-tagged when a slug is known. */
function storeUrl(
  platform: Platform,
  locale: ReturnType<typeof detectLocale>,
  slug: string | null,
): string | null {
  if (platform === "ios" && hasAppStore()) {
    const url = new URL(appStoreUrl(locale));
    // `pt` + `ct` is what makes this install show up in App Store Connect →
    // Analytics → Acquisition → Campaigns, i.e. Apple's own count, independent
    // of any vendor. `mt=8` is required alongside them.
    if (slug) {
      url.searchParams.set("pt", APPLE_PROVIDER_TOKEN);
      url.searchParams.set("ct", slug);
      url.searchParams.set("mt", "8");
    }
    return url.toString();
  }
  if (platform === "android" && hasPlayStore()) {
    const url = new URL(siteConfig.store.playStore);
    // Play requires the whole referrer payload as a single encoded value; the
    // app reads it back through the Play Install Referrer API after install.
    if (slug) url.searchParams.set("referrer", `utm_source=${slug}&utm_medium=kol`);
    return url.toString();
  }
  return null;
}

/**
 * One row per tap, for the founder's own permanent click count.
 *
 * Deliberately no IP and no user agent: the job here is counting, and this
 * number exists so a KOC can reconcile it against the "link clicks" figure in
 * their own TikTok/Instagram analytics — which is the only part of the deal
 * they can independently verify. It also outlives the measurement vendor, whose
 * free plan keeps data for 30 days.
 *
 * Silent on failure. A lost click row is a measurement gap; a failed redirect
 * is a lost user. Never let the first cause the second.
 */
async function logClick(
  slug: string,
  platform: Platform,
  request: NextRequest,
): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return;

  const referer = request.headers.get("referer");
  try {
    await fetch(`${url}/rest/v1/campaign_clicks`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        slug,
        platform,
        country: request.headers.get("x-vercel-ip-country"),
        referer: referer ? referer.slice(0, 500) : null,
      }),
      signal: AbortSignal.timeout(2000),
    });
  } catch {
    // Intentionally swallowed — see the doc comment above.
  }
}

function redirect(target: string | URL): NextResponse {
  const response = NextResponse.redirect(target);
  // The destination varies by UA / language, so no shared cache may serve it.
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("Vary", "User-Agent, Accept-Language, Cookie");
  return response;
}
