import type { Metadata } from "next";
import { isLocale, type Locale, t } from "@/lib/i18n";
import { siteContent } from "@/content/site-content";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { LegalDocView } from "@/components/LegalDocView";
import { JsonLd } from "@/components/JsonLd";

const doc = siteContent.delete;

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
    description:
      locale === "vi"
        ? "Cách xóa tài khoản Cubi và toàn bộ dữ liệu đi kèm, ngay trong ứng dụng hoặc qua email."
        : "How to delete your Cubi account and all associated data, in the app or by email.",
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
