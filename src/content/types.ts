import type { Localized } from "@/lib/i18n";

export type FeatureIcon =
  | "journal"
  | "widget"
  | "film"
  | "invite"
  | "reaction"
  | "family"
  | "measure"
  | "privacy"
  | "age";

export interface Marketing {
  tagline: {
    chosen: Localized;
    alternatives: { vi: string; en: string; note: string }[];
  };
  hero: {
    eyebrow: Localized;
    headline: Localized;
    /** Full paragraph — shown from the `sm` breakpoint up. */
    sub: Localized;
    /** One-sentence version for phones, so the product visual reaches the
     *  first screen instead of sitting a scroll below it. */
    subShort: Localized;
    primaryCta: Localized;
    secondaryCta: Localized;
  };
  problem: { title: Localized; body: Localized };
  features: { icon: FeatureIcon; title: Localized; body: Localized }[];
  howItWorks: { title: Localized; body: Localized }[];
  philosophy: {
    eyebrow: Localized;
    title: Localized;
    body: Localized;
    pullQuote: Localized;
  };
  audience: { title: Localized; parents: Localized; family: Localized };
  privacy: { title: Localized; body: Localized; bullets: Localized[] };
  faq: { q: Localized; a: Localized }[];
  finalCta: { title: Localized; sub: Localized; cta: Localized };
  footerTagline: Localized;
}

/** body fields are "markdown-lite": paragraphs split by blank lines, bullets "- ". */
export interface LegalDoc {
  title: Localized;
  intro: Localized;
  sections: { heading: Localized; body: Localized }[];
}

export interface SupportContent {
  intro: Localized;
  faq: { q: Localized; a: Localized }[];
  contact: Localized;
}

export interface SiteContent {
  marketing: Marketing;
  terms: LegalDoc;
  privacy: LegalDoc;
  support: SupportContent;
  delete: LegalDoc;
}
