import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, type Locale, t } from "@/lib/i18n";
import { siteContent } from "@/content/site-content";
import { ui } from "@/content/ui";
import { siteConfig } from "@/lib/site";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { StoreButtons } from "@/components/StoreButtons";

const m = siteContent.marketing;

/**
 * About page.
 *
 * Deliberately built only from claims already made in the Privacy Policy and
 * Terms — where the data lives, what Cubi will not do, how to reach a human.
 * Nothing here invents a founder biography. A short personal note from the
 * person who makes Cubi would strengthen this page a lot; it belongs in the
 * "Ai đứng sau Cubi" section, in their own words.
 */
const pageCopy = {
  description: {
    vi: "Cubi là cuốn nhật ký bé yêu riêng tư, làm tại Việt Nam. Vì sao Cubi tồn tại, những điều Cubi hứa không làm, và dữ liệu của cả nhà được giữ ở đâu.",
    en: "Cubi is a private baby diary, made in Vietnam. Why it exists, what it promises never to do, and where your family's data is kept.",
  },
  intro: {
    vi: "Cubi là một cuốn nhật ký riêng về bé, dành cho cả nhà — không phải một mạng xã hội. Trang này nói rõ vì sao Cubi tồn tại, Cubi hứa sẽ không làm gì, và mọi thứ được dựng nên bằng gì.",
    en: "Cubi is a private diary of a child, kept for the whole family — not a social network. This page sets out why Cubi exists, what it promises never to do, and what it is built on.",
  },
  promisesTitle: {
    vi: "Bốn điều Cubi hứa sẽ không làm",
    en: "Four things Cubi will never do",
  },
  promises: [
    {
      t: { vi: "Không quảng cáo", en: "No advertising" },
      b: {
        vi: "Không có quảng cáo xen vào giữa những khoảnh khắc của bé, và Cubi không dùng thông tin của cả nhà để nhắm quảng cáo.",
        en: "No ads between your child's moments, and your family's information is never used to target advertising.",
      },
    },
    {
      t: { vi: "Không bán dữ liệu cá nhân", en: "No selling personal data" },
      b: {
        vi: "Cubi không bán dữ liệu cá nhân. Dữ liệu kỹ thuật chỉ được chia sẻ với các bên giúp Cubi vận hành, ở mức vừa đủ để dịch vụ chạy được.",
        en: "Cubi does not sell personal data. Technical data is shared only with the providers that run the service, and only as much as the service needs.",
      },
    },
    {
      t: { vi: "Không có bảng tin công khai", en: "No public feed" },
      b: {
        vi: "Không có gì hiện ra công khai. Chỉ những người bố mẹ mời mới xem được, và mỗi khoảnh khắc có phạm vi riêng do bố mẹ chọn.",
        en: "Nothing is shown publicly. Only the people you invite can see anything, and every moment has a visibility scope you choose.",
      },
    },
    {
      t: { vi: "Không có lượt thích để chạy theo", en: "No likes to chase" },
      b: {
        vi: "Không có ô bình luận, không có bảng xếp hạng, không có áp lực phải trả lời. Cả nhà chỉ thả một biểu tượng cảm xúc, vậy là đủ.",
        en: "No comment box, no counters, no pressure to reply. The family taps a single emoji, and that is enough.",
      },
    },
  ],
  whoTitle: { vi: "Ai đứng sau Cubi", en: "Who makes Cubi" },
  // Written from what is actually true and checkable — the choices made and
  // what they cost — rather than a founder biography nobody verified.
  whoBody: [
    {
      vi: "Cubi là một sản phẩm độc lập, làm tại Việt Nam, cho các gia đình Việt.",
      en: "Cubi is an independent product, made in Vietnam, for Vietnamese families.",
    },
    {
      vi: "Những lựa chọn ở đây đều là lựa chọn khó. Không quảng cáo, nghĩa là Cubi phải tìm cách khác để tự nuôi mình. Không có bảng tin công khai, nghĩa là Cubi lớn chậm hơn, vì chẳng có gì để người lạ chuyền tay nhau. Không có lượt thích, nghĩa là không có con số nào níu bố mẹ mở app mỗi ngày.",
      en: "Every choice here was the harder one. No ads means Cubi has to find another way to keep itself alive. No public feed means Cubi grows slowly, because there is nothing for strangers to pass around. No likes means there is no number pulling you back each day.",
    },
    {
      vi: "Cubi vẫn chọn như vậy. Vì cuốn nhật ký của một em bé không nên là chỗ để ai đó bán quảng cáo, và những ngày đầu đời của một đứa trẻ không nên thành nội dung để người lạ lướt qua.",
      en: "We chose them anyway. A child's diary should not be somewhere to sell advertising, and a baby's first days should not become content for strangers to scroll past.",
    },
    {
      vi: "Cubi không có tổng đài, cũng không có kịch bản trả lời sẵn. Thư gửi tới hello@cubi.family đi thẳng đến người làm ra Cubi, và người viết thư trả lời cả nhà là một con người.",
      en: "There is no call centre here and no canned reply. Mail sent to hello@cubi.family goes straight to the people who make Cubi, and the person who writes back is a person.",
    },
  ],
  contactTitle: { vi: "Nói chuyện với Cubi", en: "Talk to us" },
  contactBody: {
    vi: "Có điều gì chưa ổn, có tính năng muốn đề xuất, hay chỉ muốn kể chuyện bé nhà mình — Cubi đều muốn nghe.",
    en: "Something not working, a feature you wish existed, or just a story about your little one — we would like to hear it.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "vi";
  return buildMetadata({
    locale,
    path: "/about",
    title: t(ui.about.title, locale),
    description: t(pageCopy.description, locale),
  });
}

export default async function AboutPage({
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
            { name: t(ui.pages.about, locale), path: "/about" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: t(ui.about.title, locale),
            inLanguage: locale,
            mainEntity: {
              "@type": "Organization",
              name: "Cubi",
              url: siteConfig.url,
              email: siteConfig.contactEmail,
              foundingLocation: { "@type": "Country", name: "Vietnam" },
            },
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
            {t(ui.about.title, locale)}
          </h1>
          <p className="mt-4 text-[17px] leading-[1.75] text-ink-700">
            {t(pageCopy.intro, locale)}
          </p>
        </header>

        {/* Why — the founder's own voice, already written for the home page. */}
        <section className="mt-11">
          <p className="eyebrow text-sage-500">{t(m.philosophy.eyebrow, locale)}</p>
          <h2 className="font-display mt-3 text-[26px] font-semibold leading-[1.2] text-ink-900 sm:text-[32px]">
            {t(m.philosophy.title, locale)}
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.8] text-ink-700">
            {t(m.philosophy.body, locale)}
          </p>
          <p className="font-display mt-7 border-l-2 border-terracotta-200 pl-5 text-[21px] italic leading-[1.4] text-terracotta-700 sm:text-[26px]">
            {t(m.philosophy.pullQuote, locale)}
          </p>
        </section>

        {/* Promises */}
        <section className="mt-14">
          <h2 className="font-display text-[26px] font-semibold leading-[1.2] text-ink-900 sm:text-[32px]">
            {t(pageCopy.promisesTitle, locale)}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {pageCopy.promises.map((p) => (
              <li
                key={p.t.vi}
                className="rounded-2xl border border-sage-300/40 bg-sage-100/40 p-5"
              >
                <h3 className="text-[16.5px] font-semibold leading-[1.35] text-ink-900">
                  {t(p.t, locale)}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-ink-700">
                  {t(p.b, locale)}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[14px] leading-[1.7] text-ink-500">
            {locale === "vi" ? (
              <>
                Cubi giữ những gì, ai xử lý, và xóa ra sao — tất cả nằm trong{" "}
                <Link
                  href={`/${locale}/privacy`}
                  className="text-terracotta-700 underline decoration-terracotta-200 underline-offset-4 transition-colors hover:text-terracotta-500"
                >
                  Chính sách bảo mật
                </Link>
                .
              </>
            ) : (
              <>
                What Cubi keeps, who processes it, and how it is deleted — all of
                it is in the{" "}
                <Link
                  href={`/${locale}/privacy`}
                  className="text-terracotta-700 underline decoration-terracotta-200 underline-offset-4 transition-colors hover:text-terracotta-500"
                >
                  Privacy Policy
                </Link>
                .
              </>
            )}
          </p>
        </section>

        {/* Who */}
        <section className="mt-14">
          <h2 className="font-display text-[26px] font-semibold leading-[1.2] text-ink-900 sm:text-[32px]">
            {t(pageCopy.whoTitle, locale)}
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {pageCopy.whoBody.map((para) => (
              <p key={para.vi} className="text-[16.5px] leading-[1.8] text-ink-700">
                {t(para, locale)}
              </p>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-14 rounded-2xl border border-terracotta-100 bg-terracotta-50/60 p-6 sm:p-8">
          <h2 className="font-display text-[22px] font-semibold text-ink-900 sm:text-[26px]">
            {t(pageCopy.contactTitle, locale)}
          </h2>
          <p className="mt-3 text-[15.5px] leading-[1.7] text-ink-700">
            {t(pageCopy.contactBody, locale)}
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="mt-5 inline-flex min-h-11 items-center text-[17px] font-semibold text-terracotta-700 underline decoration-terracotta-200 underline-offset-4 transition-colors hover:text-terracotta-500"
          >
            {siteConfig.contactEmail}
          </a>
        </section>

        <div className="mt-12 flex justify-center">
          <StoreButtons locale={locale} className="justify-center" />
        </div>
      </div>
    </>
  );
}
