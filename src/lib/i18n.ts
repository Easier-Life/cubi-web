export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "vi" ? "en" : "vi";
}

export const localeNames: Record<Locale, string> = {
  vi: "Tiếng Việt",
  en: "English",
};

export const localeShort: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
};

export const htmlLang: Record<Locale, string> = {
  vi: "vi",
  en: "en",
};

export const ogLocale: Record<Locale, string> = {
  vi: "vi_VN",
  en: "en_US",
};

/** A string with both language variants. */
export type Bilingual = { vi: string; en: string };

/** Pick the variant for a locale. */
export function t(value: Bilingual, locale: Locale): string {
  return value[locale];
}
