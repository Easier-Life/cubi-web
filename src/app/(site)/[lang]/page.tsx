import type { Metadata } from "next";
import { isLocale, type Locale, t } from "@/lib/i18n";
import { siteContent } from "@/content/site-content";
import { ui } from "@/content/ui";
import {
  buildMetadata,
  faqPageLd,
  howToLd,
  softwareApplicationLd,
} from "@/lib/seo";
import { StoreButtons } from "@/components/StoreButtons";
import { FeatureIcon } from "@/components/FeatureIcon";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import {
  HeroProductVisual,
  ProductGallery,
  ScreenShot,
  screens,
  type ScreenId,
} from "@/components/ProductGallery";

const m = siteContent.marketing;

/** The three steps each get the real screen that proves them. */
const STEP_SCREENS: ScreenId[] = ["moment", "invite", "widget"];
/** Everything the step section doesn't already show. */
const GALLERY_SCREENS: ScreenId[] = ["diary", "privacy", "hearts", "film", "sharp"];
/** The three features that actually differentiate Cubi, shown large. */
const PRIMARY_FEATURES = ["widget", "invite", "privacy"] as const;

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
  problemEyebrow: { vi: "Điều ai cũng thấy", en: "What every family knows" },
  whatEyebrow: { vi: "Cubi là gì?", en: "What is Cubi?" },
  whatTitle: {
    vi: "Một cuốn nhật ký bé yêu riêng tư, không phải mạng xã hội",
    en: "A private baby diary, not another social network",
  },
  whatBody: {
    vi: "Cubi giúp bố mẹ lưu ảnh, video và vài dòng về những ngày bé lớn; tự xếp theo tuổi của bé; rồi chia sẻ đúng với người thân được mời. Ảnh mới có thể tự hiện trên widget màn hình chính của cả nhà, nên ông bà ở xa vẫn thấy cháu mỗi ngày mà không cần mở nhóm chat hay tìm lại ảnh cũ.",
    en: "Cubi helps parents keep photos, videos and a few words from the days their child grows, organized by the child's age and shared only with invited family. New photos can appear automatically on the whole family's home-screen widgets, so far-away grandparents see the little one each day without digging through group chats.",
  },
  factsTitle: { vi: "Cubi trong một bảng", en: "Cubi at a glance" },
  facts: [
    {
      k: { vi: "Giá", en: "Price" },
      v: { vi: "Miễn phí", en: "Free" },
    },
    {
      k: { vi: "Thiết bị", en: "Devices" },
      v: { vi: "iPhone (iOS 17 trở lên) và Android", en: "iPhone (iOS 17+) and Android" },
    },
    {
      k: { vi: "Widget màn hình chính", en: "Home-screen widget" },
      v: { vi: "Có, trên cả hai hệ", en: "Yes, on both platforms" },
    },
    {
      k: { vi: "Ông bà tham gia", en: "How family joins" },
      v: {
        vi: "Mã mời 7 ký tự hoặc link — không cần tài khoản",
        en: "A 7-character invite code or link — no account",
      },
    },
    {
      k: { vi: "Bình luận", en: "Comments" },
      v: { vi: "Không có — chỉ thả emoji", en: "None — emoji reactions only" },
    },
    {
      k: { vi: "Quảng cáo & bảng tin công khai", en: "Ads & public feed" },
      v: { vi: "Không có cả hai", en: "Neither" },
    },
    {
      k: { vi: "Ảnh", en: "Photos" },
      v: {
        vi: "Nén cạnh dài 1920px; GPS được gỡ khỏi file lưu và chia sẻ",
        en: "Compressed to a 1920px long edge; GPS stripped from the stored and shared file",
      },
    },
    {
      // Named processors belong in the Privacy Policy, which has to list them.
      // The marketing surface gives the part a parent actually weighs — which
      // country their child's photos sit in.
      k: { vi: "Nơi lưu dữ liệu", en: "Where data lives" },
      v: {
        vi: "Máy chủ đám mây đặt tại Singapore",
        en: "Cloud servers located in Singapore",
      },
    },
    {
      k: { vi: "Xóa tài khoản", en: "Account deletion" },
      v: { vi: "Ngay trong app, hoặc qua email", en: "In the app, or by email" },
    },
    {
      k: { vi: "Làm tại", en: "Made in" },
      v: { vi: "Việt Nam", en: "Vietnam" },
    },
  ],
  galleryEyebrow: { vi: "App thật, tính năng thật", en: "Real app, real features" },
  galleryTitle: {
    vi: "Nhìn một vòng là hiểu Cubi",
    en: "See Cubi at a glance",
  },
  galleryBody: {
    vi: "Vuốt qua các màn hình thật của Cubi — không phải ảnh dựng.",
    en: "Swipe through real Cubi screens — not mock-ups.",
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
  featuresMore: { vi: "Và những điều nhỏ khác", en: "And the smaller things" },
  howEyebrow: { vi: "Cách Cubi hoạt động", en: "How Cubi works" },
  howTitle: {
    vi: "Ba bước để cả nhà cùng nhìn bé lớn",
    en: "Three steps to watch the baby grow together",
  },
  howToName: {
    vi: "Cách chia sẻ ảnh của bé với ông bà ở xa bằng Cubi",
    en: "How to share your baby's photos with faraway grandparents using Cubi",
  },
  // The privacy feature card already uses m.privacy.title verbatim, so the
  // philosophy column needs its own heading or the page carries the same h3 twice.
  privacyShortTitle: { vi: "Quyền riêng tư, nói gọn", en: "Privacy, in short" },
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

  const primary = PRIMARY_FEATURES.map(
    (icon) => m.features.find((f) => f.icon === icon)!,
  );
  const secondary = m.features.filter(
    (f) => !(PRIMARY_FEATURES as readonly string[]).includes(f.icon),
  );

  return (
    <>
      <JsonLd
        data={[
          softwareApplicationLd(
            locale,
            t(pageCopy.meta, locale),
            m.features.map((feature) => t(feature.title, locale)),
          ),
          howToLd(locale, t(pageCopy.howToName, locale), m.howItWorks),
          faqPageLd(m.faq, locale),
        ]}
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="hero-wash relative overflow-hidden border-b border-cream-300/70">
        <div className="mx-auto grid max-w-6xl items-center gap-7 px-5 pb-12 pt-6 sm:px-8 sm:pb-20 sm:pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pt-16">
          <div className="relative z-10">
            <p className="eyebrow flex items-center gap-2 text-terracotta-700">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta-500" />
              {t(m.hero.eyebrow, locale)}
            </p>
            <h1 className="font-display mt-3 max-w-2xl text-[35px] font-semibold leading-[1.06] tracking-[-0.025em] text-ink-900 min-[420px]:text-[40px] sm:text-[54px] lg:text-[62px]">
              {t(m.hero.headline, locale)}
            </h1>
            {/* Trimmed on phones so the product actually reaches the first
                screen; the full paragraph returns from `sm` up. */}
            <p className="mt-4 max-w-xl text-[16.5px] leading-[1.6] text-ink-700 sm:hidden">
              {t(m.hero.subShort, locale)}
            </p>
            <p className="mt-5 hidden max-w-xl text-[17px] leading-[1.68] text-ink-700 sm:block sm:text-[19px]">
              {t(m.hero.sub, locale)}
            </p>

            <div className="mt-6 hidden sm:block">
              <HeroTrust locale={locale} />
            </div>

            <div className="mt-6 sm:mt-7">
              <StoreButtons locale={locale} />
            </div>
            <a
              href={`/${locale}#how`}
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-terracotta-700 underline decoration-terracotta-200 underline-offset-4 transition-colors hover:text-terracotta-500"
            >
              {t(m.hero.secondaryCta, locale)}
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="relative z-0 -mx-1 lg:mx-0">
            <HeroProductVisual locale={locale} />
            <p className="font-display mx-auto mt-5 max-w-sm text-center text-[18px] italic text-terracotta-700 sm:text-[21px]">
              {t(m.tagline.chosen, locale)}
            </p>
            <div className="mt-6 sm:hidden">
              <HeroTrust locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* ── The ache (previously written but never shown) ───────────────── */}
      <section className="border-b border-cream-300/60 bg-cream-200/45">
        <div className="reveal mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <p className="eyebrow text-terracotta-700">
            {t(pageCopy.problemEyebrow, locale)}
          </p>
          <h2 className="font-display mt-4 text-[30px] font-semibold leading-[1.16] text-ink-900 sm:text-[42px]">
            {t(m.problem.title, locale)}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-[1.85] text-ink-700 sm:text-[18px]">
            {t(m.problem.body, locale)}
          </p>
          <p className="font-display mt-10 text-[24px] italic leading-[1.35] text-terracotta-700 sm:text-[32px]">
            “{t(m.philosophy.pullQuote, locale)}”
          </p>
        </div>
      </section>

      {/* ── What Cubi is + the facts table ──────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="reveal grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
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

        {/*
          Collapsed by default, like the FAQ below. Ten rows of specs cost ~700px
          on a phone and most visitors don't want them — but the text stays in the
          HTML either way, which is the point: this block exists so search and
          answer engines can read Cubi's facts flat, not because it has to be the
          first thing a parent scrolls past.
        */}
        <details className="reveal group mt-12 overflow-hidden rounded-2xl border border-cream-300 bg-cream-50/70">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-cream-100/60 sm:px-6 [&::-webkit-details-marker]:hidden">
            <h3 className="eyebrow text-ink-500">{t(pageCopy.factsTitle, locale)}</h3>
            <span
              aria-hidden="true"
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-cream-300 text-ink-500 transition-transform duration-300 ease-[var(--ease-cubi)] group-open:rotate-45 group-open:border-terracotta-200 group-open:text-terracotta-700"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <dl className="divide-y divide-divider border-t border-cream-300">
            {pageCopy.facts.map((fact) => (
              <div
                key={fact.k.vi}
                className="grid gap-1 px-5 py-3.5 sm:grid-cols-[240px_1fr] sm:gap-6 sm:px-6"
              >
                <dt className="text-[14px] font-semibold text-ink-900">
                  {t(fact.k, locale)}
                </dt>
                <dd className="text-[14.5px] leading-[1.6] text-ink-700">
                  {t(fact.v, locale)}
                </dd>
              </div>
            ))}
          </dl>
        </details>
      </section>

      {/* ── How it works — the three steps, each with its real screen ───── */}
      <section id="how" className="scroll-mt-20 bg-ink-900 py-16 text-cream-50 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="reveal flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-honey-500">{t(pageCopy.howEyebrow, locale)}</p>
              <h2 className="font-display mt-3 text-[32px] font-semibold leading-[1.12] text-cream-50 sm:text-[44px]">
                {t(pageCopy.howTitle, locale)}
              </h2>
            </div>
            <p className="flex items-center gap-2 text-[13px] font-semibold text-cream-200/70 sm:hidden">
              {t(pageCopy.swipeHint, locale)} <span aria-hidden="true">→</span>
            </p>
          </div>

          {/*
            Mobile-first: three full-width screenshots stacked made this one
            section 3.4 screens tall on a 390px phone. Same-shaped things go
            sideways on a phone — snap-scrolls here, grid from `sm` up. DOM
            order is unchanged, so the HowTo schema and reading order still hold.
          */}
          <ol className="product-gallery -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
            {m.howItWorks.map((step, index) => {
              const id = STEP_SCREENS[index];
              return (
                <li
                  key={step.title.vi}
                  className="reveal flex w-[80vw] max-w-[310px] shrink-0 snap-center flex-col sm:w-auto sm:max-w-none sm:shrink"
                >
                  <span className="font-display text-[38px] leading-none text-honey-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[19px] font-semibold text-cream-50">
                    {t(step.title, locale)}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-cream-200">
                    {t(step.body, locale)}
                  </p>
                  <div className="mt-5 overflow-hidden rounded-[24px] bg-cream-50 ring-1 ring-cream-50/15 sm:mt-6">
                    <ScreenShot id={id} locale={locale} />
                  </div>
                  <p className="mt-3 text-[13px] leading-[1.5] text-cream-200/70">
                    {t(screens[id].sub, locale)}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Remaining real screens ──────────────────────────────────────── */}
      <section
        id="screens"
        className="scroll-mt-20 overflow-hidden bg-cream-200/55 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-terracotta-700">
                {t(pageCopy.galleryEyebrow, locale)}
              </p>
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
          <ProductGallery locale={locale} ids={GALLERY_SCREENS} />
        </div>
      </section>

      {/* ── Features: three that matter, then the rest ──────────────────── */}
      <section
        id="features"
        className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow text-sage-500">{t(pageCopy.featuresEyebrow, locale)}</p>
          <h2 className="font-display mt-3 text-[32px] font-semibold leading-[1.12] text-ink-900 sm:text-[44px]">
            {t(pageCopy.featuresTitle, locale)}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-ink-700 sm:text-[17px]">
            {t(pageCopy.featuresBody, locale)}
          </p>
        </div>

        <div className="reveal mt-12 grid gap-4 lg:grid-cols-3">
          {primary.map((feature, index) => (
            <article
              key={feature.icon}
              className="rounded-[26px] border border-cream-300 bg-cream-50/80 p-7 shadow-[var(--shadow-sm)] transition duration-300 hover:-translate-y-0.5 hover:border-terracotta-200 hover:shadow-[var(--shadow-md)] sm:p-8"
            >
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl ${accentClasses[index % accentClasses.length]}`}
              >
                <FeatureIcon name={feature.icon} size={30} />
              </div>
              <h3 className="font-display mt-5 text-[23px] font-semibold leading-[1.25] text-ink-900">
                {t(feature.title, locale)}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.72] text-ink-700">
                {t(feature.body, locale)}
              </p>
            </article>
          ))}
        </div>

        {/* The rest: a quieter list, not six more equal-weight cards. */}
        <p className="eyebrow reveal mt-14 text-ink-500">
          {t(pageCopy.featuresMore, locale)}
        </p>
        <ul className="reveal mt-5 grid gap-x-10 gap-y-7 border-t border-divider pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {secondary.map((feature) => (
            <li key={feature.icon} className="flex gap-3.5">
              <span className="mt-0.5 shrink-0 text-sage-500">
                <FeatureIcon name={feature.icon} size={22} />
              </span>
              <div>
                <h3 className="text-[16px] font-semibold leading-[1.35] text-ink-900">
                  {t(feature.title, locale)}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.65] text-ink-500">
                  {t(feature.body, locale)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Philosophy + privacy ────────────────────────────────────────── */}
      <section
        id="philosophy"
        className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="reveal overflow-hidden rounded-[32px] border border-sage-300/40 bg-sage-100/45 p-7 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <FeatureIcon name="privacy" size={36} className="text-sage-700" />
              <p className="eyebrow mt-5 text-sage-500">
                {t(m.philosophy.eyebrow, locale)}
              </p>
              <h2 className="font-display mt-3 text-[32px] font-semibold leading-[1.14] text-ink-900 sm:text-[42px]">
                {t(m.philosophy.title, locale)}
              </h2>
              <p className="mt-5 text-[16px] leading-[1.78] text-ink-700">
                {t(m.philosophy.body, locale)}
              </p>
              <p className="mt-4 rounded-xl bg-cream-50/70 p-4 text-[14px] font-medium leading-[1.65] text-sage-700">
                {t(pageCopy.privateNote, locale)}
              </p>
            </div>
            <div>
              <h3 className="font-display text-[28px] font-semibold text-ink-900">
                {t(pageCopy.privacyShortTitle, locale)}
              </h3>
              <ul className="mt-6 flex flex-col gap-3.5">
                {m.privacy.bullets.map((bullet) => (
                  <li key={bullet.vi} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sage-300/45 text-sage-700"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-[15px] leading-[1.65] text-ink-700">
                      {t(bullet, locale)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who it's for ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <h2 className="font-display reveal text-center text-[30px] font-semibold text-ink-900 sm:text-[38px]">
          {t(m.audience.title, locale)}
        </h2>
        <div className="reveal mt-8 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-cream-300 bg-cream-50/70 p-7">
            <p className="eyebrow text-terracotta-700">
              {t(pageCopy.audienceParents, locale)}
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-ink-700">
              {t(m.audience.parents, locale)}
            </p>
          </article>
          <article className="rounded-2xl border border-cream-300 bg-cream-50/70 p-7">
            <p className="eyebrow text-sage-500">{t(pageCopy.audienceFamily, locale)}</p>
            <p className="mt-4 text-[16px] leading-[1.75] text-ink-700">
              {t(m.audience.family, locale)}
            </p>
          </article>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section
        id="faq"
        className="mx-auto max-w-3xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="reveal mb-8 text-center">
          <p className="eyebrow text-sage-500">{t(ui.nav.faq, locale)}</p>
          <h2 className="font-display mt-3 text-[30px] font-semibold text-ink-900 sm:text-[40px]">
            {locale === "vi" ? "Những điều cả nhà hay hỏi" : "Questions families ask"}
          </h2>
        </div>
        <div className="reveal">
          <Faq items={m.faq} locale={locale} />
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────── */}
      <section
        id="download"
        className="mx-auto max-w-5xl scroll-mt-20 px-5 pb-20 pt-8 sm:px-8 sm:pb-28"
      >
        <div
          className="reveal overflow-hidden rounded-[32px] border border-terracotta-100 px-6 py-14 text-center sm:px-12 sm:py-16"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 0%, #faf0eb 0%, #f5e4c0 55%, #f0eadf 100%)",
          }}
        >
          <h2 className="font-display mx-auto max-w-2xl text-[32px] font-semibold leading-[1.16] text-ink-900 sm:text-[44px]">
            {t(m.finalCta.title, locale)}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.75] text-ink-700">
            {t(m.finalCta.sub, locale)}
          </p>
          <div className="mt-8 flex justify-center">
            <StoreButtons locale={locale} className="justify-center" />
          </div>
        </div>
      </section>
    </>
  );
}

function HeroTrust({ locale }: { locale: Locale }) {
  return (
    <ul
      className="flex flex-wrap gap-2"
      aria-label={locale === "vi" ? "Thông tin nhanh" : "Quick facts"}
    >
      {pageCopy.heroTrust.map((item) => (
        <li
          key={item.vi}
          className="rounded-full border border-cream-300 bg-cream-50/80 px-3 py-1.5 text-[13px] font-medium text-ink-700 shadow-[var(--shadow-sm)]"
        >
          <span className="mr-1.5 text-sage-500" aria-hidden="true">
            ✓
          </span>
          {t(item, locale)}
        </li>
      ))}
    </ul>
  );
}
