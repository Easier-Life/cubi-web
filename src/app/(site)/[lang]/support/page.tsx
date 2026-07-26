import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, type Locale, t } from "@/lib/i18n";
import { siteContent } from "@/content/site-content";
import { ui } from "@/content/ui";
import { siteConfig } from "@/lib/site";
import { buildMetadata, breadcrumbLd, faqPageLd } from "@/lib/seo";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";

const doc = siteContent.support;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "vi";
  return buildMetadata({
    locale,
    path: "/support",
    title: t(ui.pages.support, locale),
    description: t(doc.intro, locale),
  });
}

export default async function SupportPage({
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
            { name: t(ui.pages.support, locale), path: "/support" },
          ]),
          faqPageLd(doc.faq, locale),
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
            {t(ui.support.title, locale)}
          </h1>
          <p className="mt-4 text-[17px] leading-[1.7] text-ink-700">
            {t(doc.intro, locale)}
          </p>
        </header>

        {/* contact card — this is the App Store Support URL */}
        <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-terracotta-100 bg-terracotta-50/60 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow text-terracotta-700">
              {t(ui.support.emailLabel, locale)}
            </p>
            <p className="mt-1 text-[18px] font-semibold text-ink-900">
              {siteConfig.contactEmail}
            </p>
          </div>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="inline-flex items-center gap-2 rounded-md bg-terracotta-600 px-5 py-3 text-[15px] font-semibold text-cream-50 transition-colors duration-200 hover:bg-terracotta-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3.5 6.5 8.5 6 8.5-6" />
            </svg>
            {locale === "vi" ? "Viết thư cho Cubi" : "Email us"}
          </a>
        </div>

        <div className="mt-12">
          <Faq items={doc.faq} locale={locale} />
        </div>

        <p className="mt-10 rounded-xl bg-cream-200/50 px-5 py-5 text-center text-[15px] leading-[1.7] text-ink-700">
          {t(doc.contact, locale)}
        </p>
      </div>
    </>
  );
}
