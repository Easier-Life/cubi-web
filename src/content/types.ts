import type { Bilingual } from "@/lib/i18n";

export type FeatureIcon =
  | "journal"
  | "widget"
  | "invite"
  | "reaction"
  | "privacy"
  | "age";

export interface Marketing {
  tagline: {
    chosen: Bilingual;
    alternatives: { vi: string; en: string; note: string }[];
  };
  hero: {
    eyebrow: Bilingual;
    headline: Bilingual;
    sub: Bilingual;
    primaryCta: Bilingual;
    secondaryCta: Bilingual;
  };
  problem: { title: Bilingual; body: Bilingual };
  features: { icon: FeatureIcon; title: Bilingual; body: Bilingual }[];
  howItWorks: { title: Bilingual; body: Bilingual }[];
  philosophy: {
    eyebrow: Bilingual;
    title: Bilingual;
    body: Bilingual;
    pullQuote: Bilingual;
  };
  audience: { title: Bilingual; parents: Bilingual; family: Bilingual };
  privacy: { title: Bilingual; body: Bilingual; bullets: Bilingual[] };
  faq: { q: Bilingual; a: Bilingual }[];
  finalCta: { title: Bilingual; sub: Bilingual; cta: Bilingual };
  footerTagline: Bilingual;
}

/** body fields are "markdown-lite": paragraphs split by blank lines, bullets "- ". */
export interface LegalDoc {
  title: Bilingual;
  intro: Bilingual;
  sections: { heading: Bilingual; body: Bilingual }[];
}

export interface SupportContent {
  intro: Bilingual;
  faq: { q: Bilingual; a: Bilingual }[];
  contact: Bilingual;
}

export interface SiteContent {
  marketing: Marketing;
  terms: LegalDoc;
  privacy: LegalDoc;
  support: SupportContent;
  delete: LegalDoc;
}
