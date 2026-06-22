import { NextResponse, type NextRequest } from "next/server";
import { detectLocale } from "@/lib/locale-detect";
import { platformFromUserAgent } from "@/lib/platform-detect";
import { appStoreUrl, hasAppStore, hasPlayStore, siteConfig } from "@/lib/site";

/**
 * `https://cubi.family/download` — the single link the Cubi app hands out when
 * a user shares the app (the recipient's platform is unknown). Sniff the
 * user-agent and send each visitor where they need to go:
 *   • iPhone  → the App Store listing in their reading language
 *   • Android → the Google Play listing
 *   • anyone else (desktop, iPad, bots) → the localized chooser page, which
 *     shows both store buttons.
 * Never a dead end, even before any store URL is live (we fall through to the
 * chooser page when a link is still "coming soon").
 *
 * Depends on request headers, so it must run per-request, not be cached.
 */
export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const platform = platformFromUserAgent(request.headers.get("user-agent"));
  const locale = detectLocale(request);

  if (platform === "ios" && hasAppStore()) {
    return redirect(appStoreUrl(locale));
  }
  if (platform === "android" && hasPlayStore()) {
    return redirect(siteConfig.store.playStore);
  }
  return redirect(new URL(`/${locale}/download`, request.url));
}

function redirect(target: string | URL): NextResponse {
  const response = NextResponse.redirect(target);
  // The destination varies by UA / language, so no shared cache may serve it.
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("Vary", "User-Agent, Accept-Language, Cookie");
  return response;
}
