export const locales = ["vi", "en", "fr", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";

/**
 * The two languages every string is guaranteed to have: Vietnamese (primary,
 * authored first) and English (the fallback every other language falls back
 * to). French and German are optional at the type level on purpose — a missing
 * variant renders the English one instead of failing the build, so a new page
 * can ship before its translation lands. Run `npm run i18n:coverage` to see
 * exactly what is still untranslated.
 */
export type Localized = { vi: string; en: string; fr?: string; de?: string };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Every locale except the given one — for hreflang and the language menu. */
export function otherLocales(locale: Locale): Locale[] {
  return locales.filter((l) => l !== locale);
}

export const localeNames: Record<Locale, string> = {
  vi: "Tiếng Việt",
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

export const localeShort: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
  fr: "FR",
  de: "DE",
};

export const htmlLang: Record<Locale, string> = {
  vi: "vi",
  en: "en",
  fr: "fr",
  de: "de",
};

export const ogLocale: Record<Locale, string> = {
  vi: "vi_VN",
  en: "en_US",
  fr: "fr_FR",
  de: "de_DE",
};

/** BCP-47 tag for `Intl` date formatting. */
export const intlLocale: Record<Locale, string> = {
  vi: "vi-VN",
  en: "en-GB",
  fr: "fr-FR",
  de: "de-DE",
};

/**
 * Pick the variant for a locale, falling back to English when a language has
 * no translation for this string yet.
 */
export function t(value: Localized, locale: Locale): string {
  return value[locale] ?? value.en;
}
