import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, type Locale, t } from "@/lib/i18n";
import { siteContent } from "@/content/site-content";
import { ui } from "@/content/ui";
import { buildMetadata, breadcrumbLd, softwareApplicationLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { StoreButtons } from "@/components/StoreButtons";

const m = siteContent.marketing;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "vi";
  return buildMetadata({
    locale,
    path: "/download",
    title: t(ui.pages.download, locale),
    description: t(m.finalCta.sub, locale),
  });
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "vi";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(locale, [
            { name: "Cubi", path: "" },
            { name: t(ui.pages.download, locale), path: "/download" },
          ]),
          softwareApplicationLd(locale, t(m.finalCta.sub, locale)),
        ]}
      />

      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-500 transition-colors hover:text-terracotta-700"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          {t(ui.backHome, locale)}
        </Link>

        <header className="mt-7">
          <h1 className="font-display text-[32px] font-semibold leading-[1.15] text-ink-900 sm:text-[40px]">
            {t(m.finalCta.title, locale)}
          </h1>
          <p className="mt-4 text-[17px] leading-[1.7] text-ink-700">
            {t(m.finalCta.sub, locale)}
          </p>
        </header>

        <div className="mt-9">
          <StoreButtons locale={locale} />
        </div>
      </div>
    </>
  );
}
