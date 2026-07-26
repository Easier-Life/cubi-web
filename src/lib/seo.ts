import type { Metadata } from "next";
import { type Bilingual, type Locale, ogLocale, t } from "@/lib/i18n";
import { OG_SIZE, siteOgAlt } from "@/lib/og-meta";
import {
  appStoreUrl,
  siteConfig,
  hasAppStore,
  hasPlayStore,
} from "@/lib/site";

/**
 * Build locale-aware Metadata with canonical + hreflang alternates and
 * Open Graph. `path` is the sub-path after the locale (e.g. "" or "/terms").
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  pathByLocale,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  /**
   * Per-locale sub-paths, for pages whose slug is translated (the guides).
   * Without this, hreflang would point Vietnamese and English at the same
   * slug — one of which is a 404.
   */
  pathByLocale?: Record<Locale, string>;
}): Metadata {
  const viPath = pathByLocale?.vi ?? path;
  const enPath = pathByLocale?.en ?? path;
  const url = `${siteConfig.url}/${locale}${path}`;
  // Static, quantized card (see app/og/site/[lang]/route.tsx). Every page must
  // set this explicitly: a page that declares its own `openGraph` replaces any
  // inherited images, so relying on the file convention left the legal, support
  // and download pages sharing as an empty summary_large_image card.
  const image = {
    url: `${siteConfig.url}/og/site-${locale}.png`,
    width: OG_SIZE.width,
    height: OG_SIZE.height,
    alt: siteOgAlt[locale],
  };
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        vi: `${siteConfig.url}/vi${viPath}`,
        en: `${siteConfig.url}/en${enPath}`,
        // Bare URLs redirect by Accept-Language (middleware.ts), and an
        // unsupported language resolves to English — so x-default must be the
        // language-negotiating URL, not /vi, which contradicted that. Pages
        // without a bare-URL route fall back to the Vietnamese one.
        "x-default": pathByLocale
          ? `${siteConfig.url}/vi${viPath}`
          : `${siteConfig.url}${path}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Cubi",
      locale: ogLocale[locale],
      alternateLocale: locale === "vi" ? ["en_US"] : ["vi_VN"],
      url,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// ---- JSON-LD structured data ----

export function organizationLd(locale: Locale = "vi") {
  const sameAs = Object.values(siteConfig.social).filter(Boolean);
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cubi",
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    logo: `${siteConfig.url}/app-icon-512.png`,
    image: `${siteConfig.url}/og/site-${locale}.png`,
    foundingLocation: { "@type": "Country", name: "Vietnam" },
    areaServed: { "@type": "Country", name: "Vietnam" },
    knowsLanguage: ["vi", "en"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.contactEmail,
      availableLanguage: ["Vietnamese", "English"],
      url: `${siteConfig.url}/${locale}/support`,
    },
  };
  // Only claim profiles that actually exist — an empty sameAs is worse than none.
  if (sameAs.length > 0) base.sameAs = sameAs;
  return base;
}

/**
 * The three-step "how it works" flow. Answer engines lift HowTo steps almost
 * verbatim when someone asks how to share baby photos with grandparents.
 */
export function howToLd(
  locale: Locale,
  name: string,
  steps: { title: Bilingual; body: Bilingual }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    inLanguage: locale,
    totalTime: "PT3M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "VND", value: "0" },
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: t(s.title, locale),
      text: t(s.body, locale),
      url: `${siteConfig.url}/${locale}#how`,
    })),
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cubi",
    url: siteConfig.url,
    inLanguage: ["vi", "en"],
    publisher: { "@type": "Organization", name: "Cubi" },
  };
}

export function softwareApplicationLd(
  locale: Locale,
  description: string,
  featureList: string[] = [],
) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Cubi",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS 17.0 or later, Android",
    description,
    url: siteConfig.url,
    inLanguage: ["vi", "en"],
    offers: { "@type": "Offer", price: "0", priceCurrency: "VND" },
    publisher: { "@type": "Organization", name: "Cubi", url: siteConfig.url },
    image: `${siteConfig.url}/app-icon-512.png`,
    screenshot: [
      `${siteConfig.url}/product/moment-${locale}.webp`,
      `${siteConfig.url}/product/widget-${locale}.webp`,
      `${siteConfig.url}/product/diary-${locale}.webp`,
      `${siteConfig.url}/product/film-${locale}.webp`,
    ],
  };
  if (featureList.length > 0) base.featureList = featureList;
  if (hasAppStore()) {
    const downloadUrls = [
      appStoreUrl(locale),
      ...(hasPlayStore() ? [siteConfig.store.playStore] : []),
    ];
    base.downloadUrl = downloadUrls;
    base.installUrl = downloadUrls;
  }
  return base;
}

export function faqPageLd(items: { q: Bilingual; a: Bilingual }[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: t(item.q, locale),
      acceptedAnswer: { "@type": "Answer", text: t(item.a, locale) },
    })),
  };
}

/**
 * A guide article. `Article` (not BlogPosting) because these are evergreen
 * how-tos rather than dated posts; dateModified is what we can honestly claim.
 */
export function articleLd({
  locale,
  path,
  headline,
  description,
  updated,
}: {
  locale: Locale;
  path: string;
  headline: string;
  description: string;
  updated: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    inLanguage: locale,
    dateModified: updated,
    datePublished: updated,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/${locale}${path}`,
    },
    image: `${siteConfig.url}/og/site-${locale}.png`,
    author: { "@type": "Organization", name: "Cubi", url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: "Cubi",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/app-icon-512.png`,
      },
    },
  };
}

export function breadcrumbLd(
  locale: Locale,
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((node, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: node.name,
      item: `${siteConfig.url}/${locale}${node.path}`,
    })),
  };
}
