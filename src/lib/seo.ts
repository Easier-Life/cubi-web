import type { Metadata } from "next";
import { type Bilingual, type Locale, ogLocale, t } from "@/lib/i18n";
import { siteConfig, hasAppStore } from "@/lib/site";

/**
 * Build locale-aware Metadata with canonical + hreflang alternates and
 * Open Graph. `path` is the sub-path after the locale (e.g. "" or "/terms").
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = `${siteConfig.url}/${locale}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        vi: `${siteConfig.url}/vi${path}`,
        en: `${siteConfig.url}/en${path}`,
        "x-default": `${siteConfig.url}/vi${path}`,
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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// ---- JSON-LD structured data ----

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cubi",
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    logo: `${siteConfig.url}/app-icon-512.png`,
    foundingLocation: { "@type": "Country", name: "Vietnam" },
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

export function softwareApplicationLd(locale: Locale, description: string) {
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
  };
  if (hasAppStore()) {
    base.downloadUrl = siteConfig.store.appStore;
    base.installUrl = siteConfig.store.appStore;
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
