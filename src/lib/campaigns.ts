/**
 * KOL/KOC acquisition campaigns — the slug↔link map behind `/r/<slug>`.
 *
 * Why the map lives in code rather than in a database or an env var: a KOL's
 * link is published into a TikTok video permanently, so the set of live slugs
 * is a fact about what has been promised to whom. Keeping it in git means every
 * addition is reviewed, dated and revertable, and a mistyped slug fails at
 * build time instead of at 2am when a video goes viral.
 */

/**
 * a-z, 0-9, underscore; 3–30 chars. The ceiling is Apple's, not ours: an App
 * Store campaign link's `ct=` token accepts at most 30 characters and silently
 * truncates beyond that, which would fuse two KOLs into one row in App Store
 * Connect — and Apple keys its historical rows on the string it saw first, so
 * that damage is not repairable afterwards. Kept identical to the CHECK
 * constraint on `public.campaign_clicks` in the Cubi Supabase project.
 */
const SLUG = /^[a-z0-9_]{3,30}$/;

export function isCampaignSlug(value: string): boolean {
  return SLUG.test(value);
}

/**
 * Slug → Kochava SmartLink click URL.
 *
 * A slug that is NOT listed here still works: `/r/<slug>` falls through to the
 * plain store redirect, which carries `ct=` for Apple and `utm_source=` for
 * Google, so both stores still count that KOL on their own. What it loses is
 * Kochava's click↔install matching (the only thing that attributes an iOS
 * install), so add the mapping before a campaign goes live, not after.
 *
 * Add one entry per KOL. Create the SmartLink in Kochava first
 * (Engagement → SmartLinks → Add a SmartLink), set its Campaign to the SAME
 * slug, then paste its click URL here.
 */
export const SMARTLINKS: Readonly<Record<string, string>> = {
  kol_test_202609: "https://smart.link/1w6s5maj37euq",
};

export function smartLinkFor(slug: string): string | null {
  return SMARTLINKS[slug] ?? null;
}

/**
 * Apple's provider token for the Easier Life account, minted by App Store
 * Connect (Analytics → Acquisition → Campaigns → Generate a Campaign Link).
 *
 * Hard-coded rather than held in an env var **because it is not a secret** — it
 * appears in every public App Store campaign link. Keeping it in git removes
 * the failure it would otherwise invite: an unset Vercel variable means the
 * `ct=` tag is dropped, Apple counts nothing, and nothing anywhere reports an
 * error. One value, one account, and it does not rotate.
 *
 * It is the same token for every campaign; only `ct=` varies, and `ct` is
 * simply the slug. So no campaign ever needs to be pre-registered in App Store
 * Connect — that dialog is a link builder, not a registry.
 */
export const APPLE_PROVIDER_TOKEN = "128906920";
