import type { Locale } from "@/lib/i18n";

/**
 * Pure Open Graph *data* — no `next/og`, no `node:fs`.
 *
 * Kept apart from lib/og.tsx (the renderer) on purpose: every page's
 * generateMetadata reads from here, and importing the renderer would drag
 * ImageResponse and the font/icon file reads into each page's module graph.
 */

export const OG_SIZE = { width: 1200, height: 630 } as const;

/** Localized copy for the invite-link card, keyed by the sharer's language. */
export const inviteOgContent: Record<Locale, { subtitle: string; footer: string }> = {
  vi: {
    subtitle: "Bạn được mời xem nhật ký của một em bé.",
    footer: "cubi.family · Cài Cubi và nhập mã mời để cùng xem",
  },
  en: {
    subtitle: "You're invited to a baby's diary.",
    footer: "cubi.family · Install Cubi and enter your invite code",
  },
};

/**
 * Localized copy for the marketing card — what every cubi.family page shares
 * as og:image. The subtitle is the locked tagline, so a shared link carries the
 * same line as the hero.
 */
export const siteOgContent: Record<Locale, { subtitle: string; footer: string }> = {
  vi: {
    subtitle: "Bé lớn từng ngày, thương đầy vòng tay.",
    footer: "cubi.family · Nhật ký bé yêu riêng tư cho cả nhà",
  },
  en: {
    subtitle: "Tiny moments, kept forever.",
    footer: "cubi.family · A private baby diary for the whole family",
  },
};

/** og:image alt text, localized — read aloud by screen readers on shares. */
export const siteOgAlt: Record<Locale, string> = {
  vi: "Cubi — nhật ký bé yêu riêng tư cho cả nhà",
  en: "Cubi — a private baby diary for the whole family",
};
