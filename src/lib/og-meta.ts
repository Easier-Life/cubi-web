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
  fr: {
    subtitle: "Une famille vous invite à suivre le journal de son bébé.",
    footer: "cubi.family · Installez Cubi et saisissez le code d'invitation",
  },
  de: {
    subtitle: "Eine Familie lädt dich zu ihrem Babytagebuch ein.",
    footer: "cubi.family · Cubi installieren und Einladungscode eingeben",
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
  fr: {
    subtitle: "Les petits jours, gardés pour toujours.",
    footer: "cubi.family · Le journal privé de bébé, pour toute la famille",
  },
  de: {
    subtitle: "Jeder Tag zählt — für immer erzählt.",
    footer: "cubi.family · Das private Babytagebuch für die ganze Familie",
  },
};

/** og:image alt text for the invite card. */
export const inviteOgAlt: Record<Locale, string> = {
  vi: "Bạn được mời xem nhật ký của một em bé trên Cubi",
  en: "You're invited to a baby's diary on Cubi",
  fr: "Une famille vous invite à suivre le journal de son bébé sur Cubi",
  de: "Du bist eingeladen, das Tagebuch eines Babys auf Cubi zu sehen",
};

/** og:image alt text, localized — read aloud by screen readers on shares. */
export const siteOgAlt: Record<Locale, string> = {
  vi: "Cubi — nhật ký bé yêu riêng tư cho cả nhà",
  en: "Cubi — a private baby diary for the whole family",
  fr: "Cubi — le journal privé de bébé pour toute la famille",
  de: "Cubi — das private Babytagebuch für die ganze Familie",
};
