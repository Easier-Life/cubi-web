import type { NextRequest } from "next/server";
import { isLocale, locales, type Locale } from "@/lib/i18n";

/** Cookie remembering the last locale the visitor read (set in middleware). */
export const LOCALE_COOKIE = "cubi-locale";

// No language signal at all (no Accept-Language) → Vietnamese, our primary
// audience. A real but unsupported language (e.g. fr, ja) → English.
const NO_SIGNAL_LOCALE: Locale = "vi";
const FOREIGN_LOCALE: Locale = "en";

/**
 * Pick the visitor's locale from a request: an explicit earlier choice (the
 * cookie set when they read a localized page) wins; otherwise the device
 * language via Accept-Language. If that language is one we don't support, fall
 * back to English; only when no device language can be read at all do we
 * default to Vietnamese.
 *
 * Shared by the locale middleware and the `/download` redirect so the two can
 * never disagree about which language a bare URL should resolve to.
 */
export function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const accept = request.headers.get("accept-language")?.trim();
  // No Accept-Language header → we couldn't detect a device language at all.
  if (!accept) return NO_SIGNAL_LOCALE;

  // Entries arrive in preference order, e.g. "vi-VN,vi;q=0.9,en;q=0.8".
  for (const entry of accept.split(",")) {
    const tag = entry.split(";")[0]?.trim().toLowerCase() ?? "";
    const match = locales.find((l) => tag === l || tag.startsWith(`${l}-`));
    if (match) return match;
  }
  // A real language preference, just not one we support → English.
  return FOREIGN_LOCALE;
}
