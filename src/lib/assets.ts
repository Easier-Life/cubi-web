import type { Locale } from "@/lib/i18n";

/**
 * Locales that have their own image files under `public/`.
 *
 * The product screenshots are real captures of the app's Vietnamese and
 * English UI. French and German readers see the English shots until those
 * captures exist (the app repo's store-screens harness renders them), which is
 * far better than a broken image — the screenshot's job is to show the shape of
 * the product, and the caption above it is translated.
 */
export type AssetLocale = "vi" | "en";

export function assetLocale(locale: Locale): AssetLocale {
  return locale === "vi" ? "vi" : "en";
}
