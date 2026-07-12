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
import { FeatureIcon } from "@/components/FeatureIcon";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import {
  HeroProductVisual,
  ProductGallery,
} from "@/components/ProductGallery";

const m = siteContent.marketing;

const pageCopy = {
  meta: {
    vi: "Cubi là ứng dụng nhật ký bé yêu riêng tư cho gia đình: lưu ảnh, video, tuổi và số đo; widget iPhone/Android; mời ông bà không cần tài khoản.",
    en: "Cubi is a private baby diary for families: keep photos, videos, ages and measurements; iPhone and Android widgets; grandparents join without an account.",
  },
  heroTrust: [
    { vi: "Miễn phí", en: "Free to use" },
    { vi: "iPhone và Android", en: "iPhone and Android" },
    { vi: "Không quảng cáo", en: "No ads" },
  ],
  whatEyebrow: { vi: "Cubi là gì?", en: "What is Cubi?" },
  whatTitle: {
    vi: "Một cuốn nhật ký bé yêu riêng tư, không phải mạng xã hội",
    en: "A private baby diary, not another social network",
  },
  whatBody: {
    vi: "Cubi giúp bố mẹ lưu ảnh, video và vài dòng về những ngày bé lớn; tự xếp theo tuổi của bé; rồi chia sẻ đúng với người thân được mời. Ảnh mới có thể tự hiện trên widget màn hình chính của cả nhà, nên ông bà ở xa vẫn thấy cháu mỗi ngày mà không cần mở nhóm chat hay tìm lại ảnh cũ.",
    en: "Cubi helps parents keep photos, videos and a few words from the days their child grows, organized by the child's age and shared only with invited family. New photos can appear automatically on the whole family's home-screen widgets, so far-away grandparents see the little one each day without digging through group chats.",
  },
  proof: [
    {
      title: { vi: "Bố mẹ lưu thật nhanh", en: "Quick for parents" },
      body: {
        vi: "Ảnh, video, chú thích và ngày của bé trong một lần đăng.",
        en: "Photos, video, a caption and the baby's day in one post.",
      },
    },
    {
      title: { vi: "Ông bà xem thật dễ", en: "Easy for grandparents" },
      body: {
        vi: "Mở mã mời là vào, không tài khoản, không mật khẩu.",
        en: "Open an invite and join — no account, no password.",
      },
    },
    {
      title: { vi: "Cả nhà luôn thấy bé", en: "The baby stays close" },
      body: {
        vi: "Widget tự đổi ảnh trên cả iPhone và Android.",
        en: "Widgets rotate photos on both iPhone and Android.",
      },
    },
  ],
  galleryEyebrow: { vi: "App thật, tính năng thật", en: "Real app, real features" },
  galleryTitle: {
    vi: "Nhìn một vòng là hiểu Cubi",
    en: "See Cubi at a glance",
  },
  galleryBody: {
    vi: "Vuốt qua các màn hình thật của Cubi — từ lúc mẹ lưu một khoảnh khắc đến khi ảnh tự hiện trên máy bà.",
    en: "Swipe through real Cubi screens — from the moment a parent saves a memory to when it appears on grandma's phone.",
  },
  swipeHint: { vi: "Vuốt để xem thêm", en: "Swipe to see more" },
  featuresEyebrow: { vi: "Đầy đủ cho hành trình của bé", en: "Made for the whole journey" },
  featuresTitle: {
    vi: "Không chỉ là một album ảnh",
    en: "More than a photo album",
  },
  featuresBody: {
    vi: "Cubi gom những việc bố mẹ thường làm rời rạc vào một nơi yên tĩnh: viết nhật ký, giữ ảnh và video, theo dõi bé lớn, mời cả nhà và làm thước phim.",
    en: "Cubi brings the scattered parts of family memory-keeping into one quiet place: journaling, photos and video, growth, family sharing and keepsake films.",
  },
  howEyebrow: { vi: "Cách Cubi hoạt động", en: "How Cubi works" },
  howTitle: {
    vi: "Ba bước để cả nhà cùng nhìn bé lớn",
    en: "Three steps to watch the baby grow together",
  },
  privateNote: {
    vi: "Mỗi khoảnh khắc có thể để Cả nhà, Chỉ một số người hoặc Chỉ mình tôi. Bố mẹ luôn là người quyết định.",
    en: "Each moment can be for Everyone, Selected people, or Only me. Parents always decide.",
  },
  audienceParents: { vi: "Cho bố mẹ", en: "For parents" },
  audienceFamily: { vi: "Cho ông bà và người thân", en: "For grandparents and family" },
} as const;

const accentClasses = [
  "bg-terracotta-50 text-terracotta-700",
  "bg-sage-100 text-sage-700",
  "bg-honey-100 text-honey-700",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "vi";
  const title =
    locale === "vi"
      ? "Cubi — Nhật ký bé yêu riêng tư cho cả nhà"
      : "Cubi — Private baby diary for the whole family";
  const base = buildMetadata({
    locale,
    path: "",
    title,
    description: t(pageCopy.meta, locale),
  });
  return { ...base, title: { absolute: title } };
}

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
          softwareApplicationLd(
            locale,
            t(pageCopy.meta, locale),
            m.features.map((feature) => t(feature.title, locale)),
          ),
          faqPageLd(m.faq, locale),
        ]}
      />

      <section className="hero-wash relative overflow-hidden border-b border-cream-300/70">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pt-16">
          <div className="relative z-10">
            <p className="eyebrow flex items-center gap-2 text-terracotta-700">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta-500" />
              {t(m.hero.eyebrow, locale)}
            </p>
            <h1 className="font-display mt-4 max-w-2xl text-[42px] font-semibold leading-[1.04] tracking-[-0.025em] text-ink-900 sm:text-[58px] lg:text-[64px]">
              {t(m.hero.headline, locale)}
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.68] text-ink-700 sm:text-[19px]">
              {t(m.hero.sub, locale)}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label={locale === "vi" ? "Thông tin nhanh" : "Quick facts"}>
              {pageCopy.heroTrust.map((item) => (
                <li key={item.vi} className="rounded-full border border-cream-300 bg-cream-50/80 px-3 py-1.5 text-[13px] font-medium text-ink-700 shadow-[var(--shadow-sm)]">
                  <span className="mr-1.5 text-sage-500" aria-hidden="true">✓</span>
                  {t(item, locale)}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <StoreButtons locale={locale} />
            </div>
            <a href={`/${locale}#screens`} className="mt-4 inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-terracotta-700 underline decoration-terracotta-200 underline-offset-4 transition-colors hover:text-terracotta-500">
              {t(m.hero.secondaryCta, locale)}
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="relative z-0 -mx-1 lg:mx-0">
            <HeroProductVisual locale={locale} />
            <p className="font-display mx-auto mt-2 max-w-sm text-center text-[18px] italic text-terracotta-700 sm:text-[21px]">
              {t(m.tagline.chosen, locale)}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow text-sage-500">{t(pageCopy.whatEyebrow, locale)}</p>
            <h2 className="font-display mt-3 text-[31px] font-semibold leading-[1.14] text-ink-900 sm:text-[42px]">
              {t(pageCopy.whatTitle, locale)}
            </h2>
          </div>
          <p className="text-[17px] leading-[1.82] text-ink-700 sm:text-[18px]">
            {t(pageCopy.whatBody, locale)}
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {pageCopy.proof.map((item, index) => (
            <article key={item.title.vi} className="rounded-2xl border border-cream-300 bg-cream-50/70 p-5 shadow-[var(--shadow-sm)]">
              <span className={`grid h-9 w-9 place-items-center rounded-xl text-sm font-bold ${accentClasses[index]}`}>{index + 1}</span>
              <h3 className="mt-4 text-[17px] font-semibold text-ink-900">{t(item.title, locale)}</h3>
              <p className="mt-1.5 text-[14px] leading-[1.65] text-ink-500">{t(item.body, locale)}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="screens" className="scroll-mt-20 overflow-hidden bg-cream-200/55 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-terracotta-700">{t(pageCopy.galleryEyebrow, locale)}</p>
              <h2 className="font-display mt-3 text-[32px] font-semibold leading-[1.12] text-ink-900 sm:text-[44px]">
                {t(pageCopy.galleryTitle, locale)}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-ink-700 sm:text-[17px]">
                {t(pageCopy.galleryBody, locale)}
              </p>
            </div>
            <p className="flex items-center gap-2 text-[13px] font-semibold text-ink-500 lg:hidden">
              {t(pageCopy.swipeHint, locale)} <span aria-hidden="true">→</span>
            </p>
          </div>
          <ProductGallery locale={locale} />
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-sage-500">{t(pageCopy.featuresEyebrow, locale)}</p>
          <h2 className="font-display mt-3 text-[32px] font-semibold leading-[1.12] text-ink-900 sm:text-[44px]">
            {t(pageCopy.featuresTitle, locale)}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-ink-700 sm:text-[17px]">
            {t(pageCopy.featuresBody, locale)}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {m.features.map((feature, index) => (
            <article key={feature.icon} className="group rounded-2xl border border-cream-300 bg-cream-50/75 p-6 shadow-[var(--shadow-sm)] transition duration-300 hover:-translate-y-0.5 hover:border-terracotta-200 hover:shadow-[var(--shadow-md)]">
              <div className={`grid h-11 w-11 place-items-center rounded-xl ${accentClasses[index % accentClasses.length]}`}>
                <FeatureIcon name={feature.icon} size={24} />
              </div>
              <h3 className="mt-4 text-[18px] font-semibold leading-[1.35] text-ink-900">{t(feature.title, locale)}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-ink-500">{t(feature.body, locale)}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="scroll-mt-20 bg-ink-900 py-16 text-cream-50 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-honey-500">{t(pageCopy.howEyebrow, locale)}</p>
            <h2 className="font-display mt-3 text-[32px] font-semibold leading-[1.12] text-cream-50 sm:text-[44px]">
              {t(pageCopy.howTitle, locale)}
            </h2>
          </div>

          <ol className="mt-12 grid gap-8 sm:grid-cols-3">
            {m.howItWorks.map((step, index) => (
              <li key={step.title.vi} className="border-t border-cream-50/15 pt-5">
                <span className="font-display text-[38px] leading-none text-honey-500">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-[19px] font-semibold text-cream-50">{t(step.title, locale)}</h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-cream-200">{t(step.body, locale)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="philosophy" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24">
        <div className="overflow-hidden rounded-[32px] border border-sage-300/40 bg-sage-100/45 p-7 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <FeatureIcon name="privacy" size={36} className="text-sage-700" />
              <p className="eyebrow mt-5 text-sage-500">{t(m.philosophy.eyebrow, locale)}</p>
              <h2 className="font-display mt-3 text-[32px] font-semibold leading-[1.14] text-ink-900 sm:text-[42px]">{t(m.philosophy.title, locale)}</h2>
              <p className="mt-5 text-[16px] leading-[1.78] text-ink-700">{t(m.philosophy.body, locale)}</p>
              <p className="mt-4 rounded-xl bg-cream-50/70 p-4 text-[14px] font-medium leading-[1.65] text-sage-700">{t(pageCopy.privateNote, locale)}</p>
            </div>
            <div>
              <h3 className="font-display text-[28px] font-semibold text-ink-900">{t(m.privacy.title, locale)}</h3>
              <ul className="mt-6 flex flex-col gap-3.5">
                {m.privacy.bullets.map((bullet) => (
                  <li key={bullet.vi} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sage-300/45 text-sage-700" aria-hidden="true">✓</span>
                    <span className="text-[15px] leading-[1.65] text-ink-700">{t(bullet, locale)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <h2 className="font-display text-center text-[30px] font-semibold text-ink-900 sm:text-[38px]">{t(m.audience.title, locale)}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-cream-300 bg-cream-50/70 p-7">
            <p className="eyebrow text-terracotta-700">{t(pageCopy.audienceParents, locale)}</p>
            <p className="mt-4 text-[16px] leading-[1.75] text-ink-700">{t(m.audience.parents, locale)}</p>
          </article>
          <article className="rounded-2xl border border-cream-300 bg-cream-50/70 p-7">
            <p className="eyebrow text-sage-500">{t(pageCopy.audienceFamily, locale)}</p>
            <p className="mt-4 text-[16px] leading-[1.75] text-ink-700">{t(m.audience.family, locale)}</p>
          </article>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-8 text-center">
          <p className="eyebrow text-sage-500">{t(ui.nav.faq, locale)}</p>
          <h2 className="font-display mt-3 text-[30px] font-semibold text-ink-900 sm:text-[40px]">{locale === "vi" ? "Những điều cả nhà hay hỏi" : "Questions families ask"}</h2>
        </div>
        <Faq items={m.faq} locale={locale} />
      </section>

      <section id="download" className="mx-auto max-w-5xl scroll-mt-20 px-5 pb-20 pt-8 sm:px-8 sm:pb-28">
        <div className="overflow-hidden rounded-[32px] border border-terracotta-100 px-6 py-14 text-center sm:px-12 sm:py-16" style={{ background: "radial-gradient(120% 120% at 50% 0%, #faf0eb 0%, #f5e4c0 55%, #f0eadf 100%)" }}>
          <h2 className="font-display mx-auto max-w-2xl text-[32px] font-semibold leading-[1.16] text-ink-900 sm:text-[44px]">{t(m.finalCta.title, locale)}</h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.75] text-ink-700">{t(m.finalCta.sub, locale)}</p>
          <div className="mt-8 flex justify-center"><StoreButtons locale={locale} className="justify-center" /></div>
        </div>
      </section>
    </>
  );
}
