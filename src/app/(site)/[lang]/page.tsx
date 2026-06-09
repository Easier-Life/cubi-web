import type { Metadata } from "next";
import { isLocale, type Locale, t } from "@/lib/i18n";
import { siteContent } from "@/content/site-content";
import { ui } from "@/content/ui";
import {
  buildMetadata,
  faqPageLd,
  softwareApplicationLd,
} from "@/lib/seo";
import { StoreButtons } from "@/components/StoreButtons";
import { PhoneWidget } from "@/components/PhoneWidget";
import { FeatureIcon } from "@/components/FeatureIcon";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";

const m = siteContent.marketing;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "vi";
  const title = `Cubi — ${t(m.hero.eyebrow, locale)}`;
  const base = buildMetadata({
    locale,
    path: "",
    title,
    description: t(m.hero.sub, locale),
  });
  return { ...base, title: { absolute: title } };
}

const accents = [
  "bg-terracotta-50 text-terracotta-700",
  "bg-sage-100 text-sage-700",
  "bg-honey-100 text-honey-700",
  "bg-terracotta-50 text-terracotta-700",
  "bg-sage-100 text-sage-700",
  "bg-honey-100 text-honey-700",
];

export default async function HomePage({
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
          softwareApplicationLd(locale, t(m.hero.sub, locale)),
          faqPageLd(m.faq, locale),
        ]}
      />

      {/* ───────────────── Hero ───────────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-6 pt-10 sm:px-8 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-20">
          <div className="reveal">
            <p className="eyebrow flex items-center gap-2 text-terracotta-700">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta-500" />
              {t(m.hero.eyebrow, locale)}
            </p>
            <h1 className="font-display mt-5 text-[38px] font-semibold leading-[1.08] tracking-[-0.01em] text-ink-900 sm:text-[52px]">
              {t(m.hero.headline, locale)}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-ink-700 sm:text-[19px]">
              {t(m.hero.sub, locale)}
            </p>
            <div className="mt-9">
              <StoreButtons locale={locale} />
            </div>
            <a
              href={`/${locale}#how`}
              className="mt-4 inline-flex items-center gap-1.5 py-1.5 text-[15px] font-medium text-ink-500 transition-colors hover:text-terracotta-700"
            >
              {t(m.hero.secondaryCta, locale)}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </a>
          </div>

          <div className="reveal flex justify-center lg:justify-end">
            <PhoneWidget locale={locale} className="lg:mr-6" />
          </div>
        </div>

        {/* embroidered tagline */}
        <div className="mx-auto flex max-w-3xl items-center gap-4 px-8 py-8 sm:py-12">
          <span className="h-px flex-1 bg-cream-300" />
          <p className="font-display text-center text-[20px] italic text-terracotta-700 sm:text-[24px]">
            {t(m.tagline.chosen, locale)}
          </p>
          <span className="h-px flex-1 bg-cream-300" />
        </div>
      </section>

      {/* ───────────────── Problem ───────────────── */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <div className="reveal">
          <h2 className="font-display text-[28px] font-semibold leading-[1.2] text-ink-900 sm:text-[34px]">
            {t(m.problem.title, locale)}
          </h2>
          <p className="mt-5 text-[17px] leading-[1.75] text-ink-700">
            {t(m.problem.body, locale)}
          </p>
        </div>
      </section>

      {/* ───────────────── Features ───────────────── */}
      <section
        id="features"
        className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-sage-500">
            {locale === "vi" ? "Cubi có gì" : "What's inside"}
          </p>
          <h2 className="font-display mt-3 text-[30px] font-semibold leading-[1.15] text-ink-900 sm:text-[38px]">
            {locale === "vi"
              ? "Mọi thứ để giữ một ngày của bé"
              : "Everything to keep a day of your child"}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {m.features.map((feature, i) => (
            <div
              key={feature.icon}
              className="reveal group rounded-2xl border border-cream-300 bg-cream-50/70 p-7 transition-all duration-300 ease-[var(--ease-cubi)] hover:-translate-y-1 hover:border-terracotta-200 hover:shadow-[var(--shadow-md)]"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-xl ${accents[i % accents.length]}`}
              >
                <FeatureIcon name={feature.icon} size={26} />
              </div>
              <h3 className="mt-5 text-[18px] font-semibold text-ink-900">
                {t(feature.title, locale)}
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.65] text-ink-500">
                {t(feature.body, locale)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── How it works ───────────────── */}
      <section
        id="how"
        className="scroll-mt-24 bg-cream-200/50 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow text-sage-500">
              {locale === "vi" ? "Cách dùng" : "How it works"}
            </p>
            <h2 className="font-display mt-3 text-[30px] font-semibold leading-[1.15] text-ink-900 sm:text-[38px]">
              {locale === "vi" ? "Ba bước, là cả nhà cùng vào" : "Three steps, and the family is in"}
            </h2>
          </div>

          <ol className="mt-12 grid gap-8 sm:grid-cols-3">
            {m.howItWorks.map((step, i) => (
              <li key={i} className="reveal relative">
                <span className="font-display text-[44px] font-semibold leading-none text-terracotta-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[19px] font-semibold text-ink-900">
                  {t(step.title, locale)}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.7] text-ink-500">
                  {t(step.body, locale)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────── Philosophy ───────────────── */}
      <section
        id="philosophy"
        className="mx-auto max-w-4xl scroll-mt-24 px-5 py-20 text-center sm:px-8 sm:py-28"
      >
        <div className="reveal">
          <p className="eyebrow text-sage-500">{t(m.philosophy.eyebrow, locale)}</p>
          <h2 className="font-display mt-4 text-[30px] font-semibold leading-[1.18] text-ink-900 sm:text-[40px]">
            {t(m.philosophy.title, locale)}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.8] text-ink-700">
            {t(m.philosophy.body, locale)}
          </p>
          <blockquote className="font-display mx-auto mt-12 max-w-2xl text-[24px] italic leading-[1.4] text-terracotta-700 sm:text-[30px]">
            <span aria-hidden="true" className="text-honey-500">
              “
            </span>
            {t(m.philosophy.pullQuote, locale)}
            <span aria-hidden="true" className="text-honey-500">
              ”
            </span>
          </blockquote>
        </div>
      </section>

      {/* ───────────────── Audience ───────────────── */}
      <section className="mx-auto max-w-5xl px-5 pb-8 sm:px-8">
        <div className="reveal mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-display text-[26px] font-semibold text-ink-900 sm:text-[32px]">
            {t(m.audience.title, locale)}
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="reveal rounded-2xl border border-cream-300 bg-cream-50/70 p-8">
            <FeatureIcon name="journal" size={28} className="text-terracotta-700" />
            <h3 className="mt-4 text-[18px] font-semibold text-ink-900">
              {locale === "vi" ? "Bố mẹ trẻ" : "Young parents"}
            </h3>
            <p className="mt-2.5 text-[15px] leading-[1.7] text-ink-500">
              {t(m.audience.parents, locale)}
            </p>
          </div>
          <div className="reveal rounded-2xl border border-cream-300 bg-cream-50/70 p-8">
            <FeatureIcon name="reaction" size={28} className="text-sage-700" />
            <h3 className="mt-4 text-[18px] font-semibold text-ink-900">
              {locale === "vi" ? "Ông bà, cả nhà" : "Grandparents & family"}
            </h3>
            <p className="mt-2.5 text-[15px] leading-[1.7] text-ink-500">
              {t(m.audience.family, locale)}
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── Privacy ───────────────── */}
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="reveal overflow-hidden rounded-3xl border border-sage-300/40 bg-sage-100/40 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <FeatureIcon name="privacy" size={34} className="text-sage-700" />
              <h2 className="font-display mt-4 text-[28px] font-semibold leading-[1.2] text-ink-900 sm:text-[34px]">
                {t(m.privacy.title, locale)}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-ink-700">
                {t(m.privacy.body, locale)}
              </p>
            </div>
            <ul className="flex flex-col gap-3.5">
              {m.privacy.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage-300/50 text-sage-700">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.5 10 17.5 19 7" />
                    </svg>
                  </span>
                  <span className="text-[15px] leading-[1.6] text-ink-700">
                    {t(bullet, locale)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────────── FAQ ───────────────── */}
      <section
        id="faq"
        className="mx-auto max-w-3xl scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16"
      >
        <div className="reveal mb-8 text-center">
          <p className="eyebrow text-sage-500">{t(ui.nav.faq, locale)}</p>
          <h2 className="font-display mt-3 text-[28px] font-semibold text-ink-900 sm:text-[36px]">
            {locale === "vi" ? "Những điều cả nhà hay hỏi" : "Questions families ask"}
          </h2>
        </div>
        <div className="reveal">
          <Faq items={m.faq} locale={locale} />
        </div>
      </section>

      {/* ───────────────── Download ───────────────── */}
      <section
        id="download"
        className="mx-auto max-w-5xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20"
      >
        <div
          className="reveal overflow-hidden rounded-3xl border border-terracotta-100 px-6 py-14 text-center sm:px-12"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 0%, #faf0eb 0%, #f5e4c0 55%, #f0eadf 100%)",
          }}
        >
          <h2 className="font-display mx-auto max-w-2xl text-[30px] font-semibold leading-[1.18] text-ink-900 sm:text-[40px]">
            {t(m.finalCta.title, locale)}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.7] text-ink-700">
            {t(m.finalCta.sub, locale)}
          </p>
          <div className="mt-9 flex justify-center">
            <StoreButtons locale={locale} className="justify-center" />
          </div>
        </div>
      </section>
    </>
  );
}
