import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale, t } from "@/lib/i18n";
import { guides, guideBySlug } from "@/content/guides";
import { ui } from "@/content/ui";
import {
  articleLd,
  breadcrumbLd,
  buildMetadata,
  faqPageLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { MarkdownLite } from "@/components/MarkdownLite";
import { StoreButtons } from "@/components/StoreButtons";
import { siteContent } from "@/content/site-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    guides.map((guide) => ({ lang, slug: guide.slug[lang] })),
  );
}

/** The guide for this URL, but only if the slug matches the URL's language. */
function resolve(lang: string, slug: string) {
  const locale: Locale = isLocale(lang) ? lang : "vi";
  const guide = guideBySlug(slug);
  if (!guide || guide.slug[locale] !== slug) return null;
  return { locale, guide };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const found = resolve(lang, slug);
  if (!found) return {};
  const { locale, guide } = found;

  return buildMetadata({
    locale,
    path: `/guides/${guide.slug[locale]}`,
    title: t(guide.title, locale),
    description: t(guide.description, locale),
    pathByLocale: {
      vi: `/guides/${guide.slug.vi}`,
      en: `/guides/${guide.slug.en}`,
    },
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const found = resolve(lang, slug);
  if (!found) notFound();
  const { locale, guide } = found;

  const others = guides.filter((g) => g.id !== guide.id);
  const path = `/guides/${guide.slug[locale]}`;
  const updated = new Date(guide.updated).toLocaleDateString(
    locale === "vi" ? "vi-VN" : "en-GB",
    { day: "numeric", month: "long", year: "numeric" },
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(locale, [
            { name: "Cubi", path: "" },
            { name: t(ui.pages.guides, locale), path: "/guides" },
            { name: t(guide.title, locale), path },
          ]),
          articleLd({
            locale,
            path,
            headline: t(guide.title, locale),
            description: t(guide.description, locale),
            updated: guide.updated,
          }),
          faqPageLd(guide.faq, locale),
        ]}
      />

      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Link
          href={`/${locale}/guides`}
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-500 transition-colors hover:text-terracotta-700"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          {t(ui.guides.back, locale)}
        </Link>

        <header className="mt-7 border-b border-divider pb-7">
          <h1 className="font-display text-[31px] font-semibold leading-[1.15] text-ink-900 sm:text-[40px]">
            {t(guide.title, locale)}
          </h1>
          <p className="eyebrow mt-4 text-ink-500">
            {t(ui.lastUpdated, locale)}: {updated}
          </p>
        </header>

        <div className="mt-7 rounded-xl border border-cream-300 bg-cream-50/70 p-5 text-[16px] leading-[1.75] text-ink-700 sm:p-6">
          {t(guide.intro, locale)}
        </div>

        {/* Jump list — helps long-page scanning and gives answer engines the
            article's shape without re-reading the whole body. */}
        <nav className="mt-8 rounded-xl bg-cream-200/45 px-5 py-4" aria-label={t(ui.guides.inThisArticle, locale)}>
          <p className="eyebrow text-ink-500">{t(ui.guides.inThisArticle, locale)}</p>
          <ol className="mt-3 flex flex-col gap-1.5">
            {guide.sections.map((section, i) => (
              <li key={i}>
                <a
                  href={`#s${i + 1}`}
                  className="text-[14.5px] leading-[1.5] text-ink-700 underline decoration-cream-300 underline-offset-4 transition-colors hover:text-terracotta-700"
                >
                  {t(section.heading, locale)}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 space-y-9">
          {guide.sections.map((section, i) => (
            <section key={i} id={`s${i + 1}`} className="scroll-mt-24">
              <h2 className="font-display text-[21px] font-semibold leading-[1.25] text-ink-900 sm:text-[25px]">
                {t(section.heading, locale)}
              </h2>
              <div className="mt-3">
                <MarkdownLite text={t(section.body, locale)} />
              </div>
            </section>
          ))}
        </div>

        <section className="mt-14 border-t border-divider pt-9">
          <h2 className="font-display text-[24px] font-semibold text-ink-900">
            {locale === "vi" ? "Câu hỏi thường gặp" : "Frequently asked"}
          </h2>
          <dl className="mt-5 flex flex-col gap-6">
            {guide.faq.map((item, i) => (
              <div key={i}>
                <dt className="text-[16px] font-semibold leading-[1.4] text-ink-900">
                  {t(item.q, locale)}
                </dt>
                <dd className="mt-2 text-[15px] leading-[1.7] text-ink-700">
                  {t(item.a, locale)}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <aside
          className="mt-14 rounded-[26px] border border-terracotta-100 px-6 py-10 text-center sm:px-10"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 0%, #faf0eb 0%, #f5e4c0 55%, #f0eadf 100%)",
          }}
        >
          <h2 className="font-display mx-auto max-w-md text-[24px] font-semibold leading-[1.2] text-ink-900 sm:text-[30px]">
            {t(siteContent.marketing.finalCta.title, locale)}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-[1.7] text-ink-700">
            {t(siteContent.marketing.footerTagline, locale)}
          </p>
          <div className="mt-7 flex justify-center">
            <StoreButtons locale={locale} className="justify-center" />
          </div>
        </aside>

        {others.length > 0 ? (
          <section className="mt-14">
            <h2 className="eyebrow text-ink-500">{t(ui.guides.alsoRead, locale)}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {others.map((other) => (
                <li key={other.id}>
                  <Link
                    href={`/${locale}/guides/${t(other.slug, locale)}`}
                    className="group flex items-start gap-3 rounded-xl border border-cream-300 bg-cream-50/60 px-5 py-4 transition-colors hover:border-terracotta-200"
                  >
                    <span aria-hidden="true" className="mt-0.5 text-terracotta-500">
                      →
                    </span>
                    <span className="text-[15.5px] font-medium leading-[1.45] text-ink-900 transition-colors group-hover:text-terracotta-700">
                      {t(other.title, locale)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>
    </>
  );
}
