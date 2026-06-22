import type { Locale } from "@/lib/i18n";

/**
 * Single source of truth for site-wide config.
 *
 * ▶ STORE LINKS: the live store URLs live below. The App Store listing is
 *   language-specific (the Vietnamese and English App Store pages have
 *   different slugs), so it's keyed by locale; Google Play localizes itself
 *   from one URL. Until a URL is a real https link, download buttons render a
 *   calm "coming soon" state instead of a dead link.
 */
export const siteConfig = {
  name: "Cubi",
  url: "https://cubi.family",
  domain: "cubi.family",
  contactEmail: "hello@cubi.family",

  // App stores — live listing URLs (same app, localized pages).
  store: {
    appStore: {
      vi: "https://apps.apple.com/vn/app/cubi-nh%E1%BA%ADt-k%C3%BD-b%C3%A9-y%C3%AAu-widget/id6769685747?l=vi",
      en: "https://apps.apple.com/vn/app/cubi-baby-diary-photo-widget/id6769685747",
    },
    playStore: "https://play.google.com/store/apps/details?id=family.cubi.app",
  },

  // Identifiers (kept in sync with ../cubi/docs)
  appleAppId: "Y4A8JWGT4J.family.cubi.app",
  bundleId: "family.cubi.app",

  social: {
    // add when live, e.g. facebook/zalo OA — used in Organization JSON-LD
  } as Record<string, string>,
} as const;

/** App Store listing URL for the visitor's reading language. */
export const appStoreUrl = (locale: Locale) => siteConfig.store.appStore[locale];

export const hasAppStore = () =>
  /^https:\/\//.test(siteConfig.store.appStore.vi);
export const hasPlayStore = () => /^https:\/\//.test(siteConfig.store.playStore);
