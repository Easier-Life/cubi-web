import type { Metadata } from "next";
import { isLocale, type Locale, type Localized, t } from "@/lib/i18n";
import { siteContent } from "@/content/site-content";
import { ui } from "@/content/ui";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { LegalDocView } from "@/components/LegalDocView";
import { JsonLd } from "@/components/JsonLd";

const doc = siteContent.privacy;

const metaDescription: Localized = {
  vi: "Chính sách bảo mật của Cubi — Cubi giữ những gì, dùng ra sao và ai có thể thấy khoảnh khắc của bé.",
  en: "Cubi Privacy Policy — what we collect, how we use it, and who can see your baby's moments.",
  fr: "Politique de confidentialité de Cubi — ce que nous collectons, comment nous l'utilisons et qui peut voir les instants de votre bébé.",
  de: "Datenschutzerklärung von Cubi — was wir erheben, wie wir es nutzen und wer die Momente deines Babys sehen kann.",
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
    path: "/privacy",
    title: t(doc.title, locale),
    description: t(metaDescription, locale),
  });
}

export default async function PrivacyPage({
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
          { name: t(doc.title, locale), path: "/privacy" },
        ])}
      />
      <LegalDocView doc={doc} locale={locale} lastUpdated={t(ui.effectiveDate, locale)} />
    </>
  );
}
