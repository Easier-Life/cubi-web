import type { Metadata } from "next";
import { isLocale, type Locale, type Localized, t } from "@/lib/i18n";
import { siteContent } from "@/content/site-content";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { LegalDocView } from "@/components/LegalDocView";
import { JsonLd } from "@/components/JsonLd";

const doc = siteContent.delete;

const metaDescription: Localized = {
  vi: "Cách xóa tài khoản Cubi và toàn bộ dữ liệu đi kèm, ngay trong ứng dụng hoặc qua email.",
  en: "How to delete your Cubi account and all associated data, in the app or by email.",
  fr: "Comment supprimer votre compte Cubi et toutes les données associées, dans l'app ou par e-mail.",
  de: "Wie du dein Cubi-Konto und alle zugehörigen Daten löschst — in der App oder per E-Mail.",
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
    path: "/delete-account",
    title: t(doc.title, locale),
    description: t(metaDescription, locale),
  });
}

export default async function DeleteAccountPage({
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
          { name: t(doc.title, locale), path: "/delete-account" },
        ])}
      />
      <LegalDocView doc={doc} locale={locale} />
    </>
  );
}
