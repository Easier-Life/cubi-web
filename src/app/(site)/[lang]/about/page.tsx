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
    fr: "Cubi est un journal de bébé privé, fait au Vietnam. Pourquoi il existe, ce qu'il promet de ne jamais faire, et où vivent les données de votre famille.",
    de: "Cubi ist ein privates Babytagebuch, gemacht in Vietnam. Warum es Cubi gibt, was Cubi niemals tun wird und wo die Daten eurer Familie liegen.",
  },
  intro: {
    vi: "Cubi là một cuốn nhật ký riêng về bé, dành cho cả nhà — không phải một mạng xã hội. Trang này nói rõ vì sao Cubi tồn tại, Cubi hứa sẽ không làm gì, và mọi thứ được dựng nên bằng gì.",
    en: "Cubi is a private diary of a child, kept for the whole family — not a social network. This page sets out why Cubi exists, what it promises never to do, and what it is built on.",
    fr: "Cubi est le journal privé d'un enfant, tenu pour toute la famille — pas un réseau social. Cette page explique pourquoi Cubi existe, ce qu'il promet de ne jamais faire, et sur quoi il est bâti.",
    de: "Cubi ist das private Tagebuch eines Kindes, geführt für die ganze Familie — kein soziales Netzwerk. Diese Seite erklärt, warum es Cubi gibt, was Cubi niemals tun wird und worauf es gebaut ist.",
  },
  promisesTitle: {
    vi: "Bốn điều Cubi hứa sẽ không làm",
    en: "Four things Cubi will never do",
    fr: "Quatre choses que Cubi ne fera jamais",
    de: "Vier Dinge, die Cubi niemals tut",
  },
  promises: [
    {
      t: { vi: "Không quảng cáo", en: "No advertising", fr: "Aucune publicité", de: "Keine Werbung" },
      b: {
        vi: "Không có quảng cáo xen vào giữa những khoảnh khắc của bé, và Cubi không dùng thông tin của cả nhà để nhắm quảng cáo.",
        en: "No ads between your child's moments, and your family's information is never used to target advertising.",
        fr: "Aucune publicité entre les instants de votre enfant, et les informations de votre famille ne servent jamais à cibler des annonces.",
        de: "Keine Werbung zwischen den Momenten deines Kindes — und die Daten eurer Familie werden nie für Werbung genutzt.",
      },
    },
    {
      t: { vi: "Không bán dữ liệu cá nhân", en: "No selling personal data", fr: "Aucune vente de données personnelles", de: "Kein Verkauf persönlicher Daten" },
      b: {
        vi: "Cubi không bán dữ liệu cá nhân. Dữ liệu kỹ thuật chỉ được chia sẻ với các bên giúp Cubi vận hành, ở mức vừa đủ để dịch vụ chạy được.",
        en: "Cubi does not sell personal data. Technical data is shared only with the providers that run the service, and only as much as the service needs.",
        fr: "Cubi ne vend pas de données personnelles. Les données techniques ne sont partagées qu'avec les prestataires qui font tourner le service, et seulement dans la mesure nécessaire.",
        de: "Cubi verkauft keine persönlichen Daten. Technische Daten gehen nur an die Dienstleister, die den Dienst betreiben — und nur so weit, wie der Dienst es braucht.",
      },
    },
    {
      t: { vi: "Không có bảng tin công khai", en: "No public feed", fr: "Aucun fil public", de: "Kein öffentlicher Feed" },
      b: {
        vi: "Không có gì hiện ra công khai. Chỉ những người bố mẹ mời mới xem được, và mỗi khoảnh khắc có phạm vi riêng do bố mẹ chọn.",
        en: "Nothing is shown publicly. Only the people you invite can see anything, and every moment has a visibility scope you choose.",
        fr: "Rien n'est affiché publiquement. Seules les personnes que vous invitez voient quelque chose, et chaque instant a une visibilité que vous choisissez.",
        de: "Nichts wird öffentlich gezeigt. Nur die Menschen, die ihr einladet, sehen etwas — und für jeden Moment wählt ihr selbst, wer ihn sieht.",
      },
    },
    {
      t: { vi: "Không có lượt thích để chạy theo", en: "No likes to chase", fr: "Aucun like à courir après", de: "Keine Likes, denen man hinterherläuft" },
      b: {
        vi: "Không có ô bình luận, không có bảng xếp hạng, không có áp lực phải trả lời. Cả nhà chỉ thả một biểu tượng cảm xúc, vậy là đủ.",
        en: "No comment box, no counters, no pressure to reply. The family taps a single emoji, and that is enough.",
        fr: "Pas de champ de commentaire, pas de compteur, aucune obligation de répondre. La famille touche un emoji, et c'est bien assez.",
        de: "Kein Kommentarfeld, keine Zähler, kein Zwang zu antworten. Die Familie tippt ein Emoji — und das genügt.",
      },
    },
  ],
  privacyNoteBefore: {
    vi: "Cubi giữ những gì, ai xử lý, và xóa ra sao — tất cả nằm trong ",
    en: "What Cubi keeps, who processes it, and how it is deleted — all of it is in the ",
    fr: "Ce que Cubi conserve, qui le traite et comment tout cela s'efface — tout est dans la ",
    de: "Was Cubi speichert, wer es verarbeitet und wie es gelöscht wird — das alles steht in der ",
  },
  privacyNoteAfter: { vi: ".", en: ".", fr: ".", de: "." },
  whoTitle: { vi: "Ai đứng sau Cubi", en: "Who makes Cubi", fr: "Qui est derrière Cubi", de: "Wer hinter Cubi steckt" },
  // Written from what is actually true and checkable — the choices made and
  // what they cost — rather than a founder biography nobody verified.
  whoBody: [
    {
      vi: "Cubi là một sản phẩm độc lập, làm tại Việt Nam, cho các gia đình Việt.",
      en: "Cubi is an independent product, made in Vietnam, for Vietnamese families.",
      fr: "Cubi est un produit indépendant, fait au Vietnam, d'abord pour les familles vietnamiennes.",
      de: "Cubi ist ein unabhängiges Produkt, gemacht in Vietnam, zuerst für vietnamesische Familien.",
    },
    {
      vi: "Những lựa chọn ở đây đều là lựa chọn khó. Không quảng cáo, nghĩa là Cubi phải tìm cách khác để tự nuôi mình. Không có bảng tin công khai, nghĩa là Cubi lớn chậm hơn, vì chẳng có gì để người lạ chuyền tay nhau. Không có lượt thích, nghĩa là không có con số nào níu bố mẹ mở app mỗi ngày.",
      en: "Every choice here was the harder one. No ads means Cubi has to find another way to keep itself alive. No public feed means Cubi grows slowly, because there is nothing for strangers to pass around. No likes means there is no number pulling you back each day.",
      fr: "Chaque choix ici était le plus difficile. Sans publicité, Cubi doit trouver un autre moyen de vivre. Sans fil public, Cubi grandit lentement, car il n'y a rien que des inconnus puissent faire circuler. Sans likes, aucun chiffre ne vous ramène chaque jour.",
      de: "Jede Entscheidung hier war die unbequemere. Ohne Werbung muss Cubi einen anderen Weg finden, sich zu tragen. Ohne öffentlichen Feed wächst Cubi langsam, weil es nichts gibt, das Fremde weiterreichen. Ohne Likes gibt es keine Zahl, die dich jeden Tag zurückholt.",
    },
    {
      vi: "Cubi vẫn chọn như vậy. Vì cuốn nhật ký của một em bé không nên là chỗ để ai đó bán quảng cáo, và những ngày đầu đời của một đứa trẻ không nên thành nội dung để người lạ lướt qua.",
      en: "We chose them anyway. A child's diary should not be somewhere to sell advertising, and a baby's first days should not become content for strangers to scroll past.",
      fr: "Nous les avons choisis quand même. Le journal d'un enfant ne devrait pas être un espace publicitaire, et les premiers jours d'un bébé ne devraient pas devenir du contenu que des inconnus font défiler.",
      de: "Wir haben sie trotzdem getroffen. Das Tagebuch eines Kindes sollte kein Werbeplatz sein, und die ersten Tage eines Babys sollten kein Inhalt sein, an dem Fremde vorbeiscrollen.",
    },
    {
      vi: "Cubi không có tổng đài, cũng không có kịch bản trả lời sẵn. Thư gửi tới hello@cubi.family đi thẳng đến người làm ra Cubi, và người viết thư trả lời cả nhà là một con người.",
      en: "There is no call centre here and no canned reply. Mail sent to hello@cubi.family goes straight to the people who make Cubi, and the person who writes back is a person.",
      fr: "Il n'y a ici ni centre d'appels ni réponse toute faite. Un message envoyé à hello@cubi.family arrive directement chez les personnes qui font Cubi, et celle qui vous répond est une vraie personne.",
      de: "Es gibt hier kein Callcenter und keine vorgefertigte Antwort. Eine Mail an hello@cubi.family landet direkt bei den Menschen, die Cubi machen — und wer zurückschreibt, ist ein Mensch.",
    },
  ],
  contactTitle: { vi: "Nói chuyện với Cubi", en: "Talk to us", fr: "Parler à Cubi", de: "Sprich mit uns" },
  contactBody: {
    vi: "Có điều gì chưa ổn, có tính năng muốn đề xuất, hay chỉ muốn kể chuyện bé nhà mình — Cubi đều muốn nghe.",
    en: "Something not working, a feature you wish existed, or just a story about your little one — we would like to hear it.",
    fr: "Quelque chose qui cloche, une fonction dont vous rêvez, ou simplement une histoire de votre petit bout — nous aimerions l'entendre.",
    de: "Etwas klemmt, dir fehlt eine Funktion, oder du willst einfach von deinem Kleinen erzählen — wir hören gern zu.",
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
            {t(pageCopy.privacyNoteBefore, locale)}
            <Link
              href={`/${locale}/privacy`}
              className="text-terracotta-700 underline decoration-terracotta-200 underline-offset-4 transition-colors hover:text-terracotta-500"
            >
              {t(ui.pages.privacy, locale)}
            </Link>
            {t(pageCopy.privacyNoteAfter, locale)}
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
