import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, type Locale, t } from "@/lib/i18n";
import { guides } from "@/content/guides";
import { ui } from "@/content/ui";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "vi";
  return buildMetadata({
    locale,
    path: "/guides",
    title: t(ui.guides.title, locale),
    description: t(ui.guides.intro, locale),
  });
}

export default async function GuidesPage({
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
            { name: t(ui.pages.guides, locale), path: "/guides" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: t(ui.guides.title, locale),
            itemListElement: guides.map((g, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: t(g.title, locale),
              url: `${siteConfig.url}/${locale}/guides/${t(g.slug, locale)}`,
            })),
          },
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

        <header className="mt-7 border-b border-divider pb-8">
          <h1 className="font-display text-[32px] font-semibold leading-[1.15] text-ink-900 sm:text-[42px]">
            {t(ui.guides.title, locale)}
          </h1>
          <p className="mt-4 text-[17px] leading-[1.7] text-ink-700">
            {t(ui.guides.intro, locale)}
          </p>
        </header>

        <ul className="mt-10 flex flex-col gap-4">
          {guides.map((guide) => (
            <li key={guide.id}>
              <Link
                href={`/${locale}/guides/${t(guide.slug, locale)}`}
                className="group block rounded-2xl border border-cream-300 bg-cream-50/70 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-terracotta-200 hover:shadow-[var(--shadow-md)] sm:p-7"
              >
                <h2 className="font-display text-[21px] font-semibold leading-[1.3] text-ink-900 transition-colors group-hover:text-terracotta-700 sm:text-[24px]">
                  {t(guide.title, locale)}
                </h2>
                <p className="mt-2.5 text-[15px] leading-[1.7] text-ink-500">
                  {t(guide.description, locale)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-terracotta-700">
                  {t(ui.guides.readMore, locale)}
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
