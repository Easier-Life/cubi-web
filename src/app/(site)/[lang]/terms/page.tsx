import type { Metadata } from "next";
import { isLocale, type Locale, type Localized, t } from "@/lib/i18n";
import { siteContent } from "@/content/site-content";
import { ui } from "@/content/ui";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { LegalDocView } from "@/components/LegalDocView";
import { JsonLd } from "@/components/JsonLd";

const doc = siteContent.terms;

const metaDescription: Localized = {
  vi: "Điều khoản sử dụng Cubi — nhật ký riêng tư của bé cho cả nhà.",
  en: "Cubi Terms of Service — a private baby diary for the whole family.",
  fr: "Conditions d'utilisation de Cubi — le journal de bébé privé pour toute la famille.",
  de: "Nutzungsbedingungen von Cubi — das private Babytagebuch für die ganze Familie.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "vi";
  return buildMetadata({
    locale,
    path: "/terms",
    title: t(doc.title, locale),
    description: t(metaDescription, locale),
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "vi";

  return (
    <>
      <JsonLd
        data={breadcrumbLd(locale, [
          { name: "Cubi", path: "" },
          { name: t(doc.title, locale), path: "/terms" },
        ])}
      />
      <LegalDocView doc={doc} locale={locale} lastUpdated={t(ui.effectiveDate, locale)} />
    </>
  );
}
