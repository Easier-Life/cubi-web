/**
 * Single source of truth for site-wide config.
 *
 * ▶ STORE LINKS: paste the real store URLs below. Until `appStore` is a real
 *   https URL, download buttons render a calm "coming soon" state instead of a
 *   dead link. Everything else (CTAs, structured data) reads from here.
 */
export const siteConfig = {
  name: "Cubi",
  url: "https://cubi.family",
  domain: "cubi.family",
  contactEmail: "hello@cubi.family",

  // App stores — set these to the live listing URLs.
  store: {
    appStore: "", // e.g. "https://apps.apple.com/app/idXXXXXXXXX"
    playStore: "", // e.g. "https://play.google.com/store/apps/details?id=family.cubi.app"
  },

  // Identifiers (kept in sync with ../cubi/docs)
  appleAppId: "Y4A8JWGT4J.family.cubi.app",
  bundleId: "family.cubi.app",

  social: {
    // add when live, e.g. facebook/zalo OA — used in Organization JSON-LD
  } as Record<string, string>,
} as const;

export const hasAppStore = () => /^https:\/\//.test(siteConfig.store.appStore);
export const hasPlayStore = () => /^https:\/\//.test(siteConfig.store.playStore);
