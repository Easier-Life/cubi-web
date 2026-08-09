import Image from "next/image";
import { type Localized, type Locale, t } from "@/lib/i18n";
import { assetLocale } from "@/lib/assets";
import { ui } from "@/content/ui";

/**
 * Real app screenshots.
 *
 * The captions used to be baked into the WebP files as pixels. They are HTML
 * now and the images were re-cropped to start at the phone: baked text can't be
 * read by search engines or answer engines, can't be selected or translated,
 * didn't scale for low-vision readers, and rendered at ~11px on desktop cards.
 * Every screenshot is a uniform 900×1615 so the cards share one shape.
 */
export const SCREEN_SIZE = { width: 900, height: 1615 } as const;

export type ScreenId =
  | "moment"
  | "widget"
  | "diary"
  | "film"
  | "privacy"
  | "hearts"
  | "invite"
  | "sharp";

export type Screen = { id: ScreenId; title: Localized; sub: Localized; alt: Localized };

export const screens: Record<ScreenId, Screen> = {
  moment: {
    id: "moment",
    title: { vi: "Mẹ lưu một khoảnh khắc", en: "Mom saves a moment", fr: "Maman garde un instant", de: "Mama hält einen Moment fest" },
    sub: {
      vi: "Chọn ảnh, viết vài dòng — ba mươi giây là xong.",
      en: "Pick photos, write a line — done in thirty seconds.",
      fr: "Choisissez des photos, écrivez un mot — c'est fait en trente secondes.",
      de: "Fotos wählen, ein paar Worte schreiben — in dreißig Sekunden erledigt.",
    },
    alt: {
      vi: "Màn hình Cubi để mẹ chọn ảnh, viết vài dòng và lưu khoảnh khắc của bé",
      en: "Cubi screen where a parent selects photos, writes a line and keeps a baby's moment",
      fr: "Écran Cubi où un parent choisit des photos, écrit un mot et garde un instant de son bébé",
      de: "Cubi-Screen, auf dem ein Elternteil Fotos auswählt, ein paar Worte schreibt und einen Moment des Babys festhält",
    },
  },
  widget: {
    id: "widget",
    title: { vi: "Bà thấy ngay tức khắc", en: "Grandma sees it instantly", fr: "Mamie le voit aussitôt", de: "Oma sieht es sofort" },
    sub: {
      vi: "Ảnh mới tự hiện ở màn hình chính, không cần mở app.",
      en: "New photos appear right on her home screen.",
      fr: "Les nouvelles photos s'affichent sur son écran d'accueil.",
      de: "Neue Fotos erscheinen direkt auf ihrem Homescreen.",
    },
    alt: {
      vi: "Widget Cubi trên màn hình chính của bà, tự hiện ảnh mới và tuổi của bé",
      en: "Cubi home-screen widget showing grandma a new baby photo and the baby's age",
      fr: "Widget Cubi sur l'écran d'accueil de mamie, avec une nouvelle photo du bébé et son âge",
      de: "Cubi-Widget auf Omas Homescreen mit einem neuen Babyfoto und dem Alter des Babys",
    },
  },
  diary: {
    id: "diary",
    title: { vi: "Nhật ký riêng, lớn lên cùng bé", en: "A private diary, growing with your baby", fr: "Un journal privé qui grandit avec votre bébé", de: "Ein privates Tagebuch, das mit deinem Baby wächst" },
    sub: {
      vi: "Mỗi khoảnh khắc gắn với tuổi của bé hôm ấy.",
      en: "Every moment kept with baby's exact age.",
      fr: "Chaque instant gardé avec l'âge exact du bébé.",
      de: "Jeder Moment mit dem genauen Alter des Babys.",
    },
    alt: {
      vi: "Dòng nhật ký riêng của bé trong Cubi với ảnh, chú thích, tuổi và phản ứng gia đình",
      en: "A private Cubi baby diary with photos, captions, age and family reactions",
      fr: "Un journal de bébé privé dans Cubi, avec photos, légendes, âge et réactions de la famille",
      de: "Ein privates Babytagebuch in Cubi mit Fotos, Notizen, Alter und Reaktionen der Familie",
    },
  },
  film: {
    id: "film",
    // Deliberately not the same wording as the "film" feature card below it —
    // two identical h3s on one page read as a duplicate to screen readers.
    title: { vi: "Xuất thành video có nhạc", en: "Export a video with music", fr: "Exportez une vidéo en musique", de: "Ein Video mit Musik exportieren" },
    sub: {
      vi: "Chọn ảnh, chọn mẫu — xuất video gửi cả nhà.",
      en: "Pick photos and a style — export a video to share.",
      fr: "Choisissez des photos et un style — exportez une vidéo à partager.",
      de: "Fotos und einen Stil wählen — Video exportieren und teilen.",
    },
    alt: {
      vi: "Màn hình Cubi biến ảnh trong nhật ký thành thước phim kỉ niệm có nhạc",
      en: "Cubi screen turning diary photos into a keepsake film with music",
      fr: "Écran Cubi transformant les photos du journal en un petit film souvenir en musique",
      de: "Cubi-Screen, der Tagebuchfotos in einen Erinnerungsfilm mit Musik verwandelt",
    },
  },
  privacy: {
    id: "privacy",
    title: { vi: "Chỉ nhà mình thấy", en: "Only your family can see", fr: "Votre famille seule y a accès", de: "Nur eure Familie sieht es" },
    sub: {
      vi: "Không công khai, không người lạ — mẹ là người quyết định.",
      en: "Not social media. No strangers. You decide.",
      fr: "Pas un réseau social. Aucun inconnu. C'est vous qui décidez.",
      de: "Kein soziales Netzwerk. Keine Fremden. Du entscheidest.",
    },
    alt: {
      vi: "Màn hình Cubi cho bố mẹ chọn ai được xem từng khoảnh khắc của bé",
      en: "Cubi screen where parents choose who can see each baby's moment",
      fr: "Écran Cubi où les parents choisissent qui peut voir chaque instant du bébé",
      de: "Cubi-Screen, auf dem Eltern wählen, wer jeden Moment des Babys sehen darf",
    },
  },
  hearts: {
    id: "hearts",
    title: { vi: "Cả nhà thả tim, không áp lực", en: "The whole family, one tap away", fr: "Toute la famille, en un geste", de: "Die ganze Familie, ein Tippen entfernt" },
    sub: {
      vi: "Chỉ emoji, không bình luận — bà chạm một cái là xong.",
      en: "Emoji only — no comments, no pressure.",
      fr: "Des emojis, rien de plus — aucun commentaire, aucune pression.",
      de: "Nur Emojis — keine Kommentare, kein Druck.",
    },
    alt: {
      vi: "Màn hình phản ứng Cubi chỉ có emoji và trái tim, không có bình luận gây áp lực",
      en: "Cubi reactions screen with emoji and hearts, without pressured comments",
      fr: "Écran des réactions Cubi, avec emojis et cœurs, sans commentaires qui pèsent",
      de: "Cubi-Reaktionen mit Emojis und Herzen, ganz ohne Kommentardruck",
    },
  },
  invite: {
    id: "invite",
    title: { vi: "Nhập mã là vào, không đăng ký", en: "Grandparents join with one code", fr: "Les grands-parents entrent avec un code", de: "Großeltern kommen mit einem Code dazu" },
    sub: {
      vi: "Ông bà không cần tài khoản, không mật khẩu.",
      en: "No account, no password — just one code.",
      fr: "Sans compte, sans mot de passe — juste un code.",
      de: "Kein Konto, kein Passwort — nur ein Code.",
    },
    alt: {
      vi: "Màn hình nhập mã mời Cubi để ông bà vào xem bé mà không cần đăng ký",
      en: "Cubi invite-code screen where grandparents join without signing up",
      fr: "Écran du code d'invitation Cubi, où les grands-parents entrent sans créer de compte",
      de: "Cubi-Einladungscode-Screen, auf dem Großeltern ohne Anmeldung dazukommen",
    },
  },
  sharp: {
    id: "sharp",
    title: { vi: "Ảnh nét, không trôi trong nhóm chat", en: "Sharp photos, never lost in chat", fr: "Des photos nettes, jamais perdues dans un fil de discussion", de: "Scharfe Fotos, die nicht im Chat verschwinden" },
    sub: {
      vi: "Album của bé gọn một nơi, xem lại lúc nào cũng được.",
      en: "Every moment in one place, forever.",
      fr: "Tous les instants au même endroit, pour toujours.",
      de: "Alle Momente an einem Ort, für immer.",
    },
    alt: {
      vi: "Ảnh bé toàn màn hình trong Cubi, giữ nét và có tuổi của bé",
      en: "A sharp full-screen baby photo in Cubi with the baby's age",
      fr: "Une photo de bébé nette en plein écran dans Cubi, avec son âge",
      de: "Ein scharfes Babyfoto im Vollbild in Cubi, mit dem Alter des Babys",
    },
  },
};

/**
 * Hero: mom's phone and grandma's home screen, side by side.
 *
 * The labels sit in normal flow directly above the phones — they used to be
 * absolutely positioned at top-0 while the phones were pinned to bottom-0,
 * which left a visible empty band between them at every viewport.
 */
export function HeroProductVisual({ locale }: { locale: Locale }) {
  const pair: ScreenId[] = ["moment", "widget"];
  const shot = assetLocale(locale);
  const heroSrc: Record<string, { src: string; w: number; h: number }> = {
    moment: { src: `/product/hero-moment-${shot}.webp`, w: 760, h: 1297 },
    widget: { src: `/product/hero-widget-${shot}.webp`, w: 760, h: 1274 },
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[390px] sm:max-w-[470px]"
      aria-label={t(ui.gallery.heroAria, locale)}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-6 bottom-5 top-10 rounded-full bg-honey-100/70 blur-3xl"
      />
      {/*
        Two rows — captions, then phones — and each figure spans both via
        subgrid, so the two labels sit on one line and the two phones on
        another. Without this the figures are only bottom-aligned, and because
        the two source images differ in height (1297 vs 1274 at the same width)
        the taller one pushed its caption visibly higher. The shared
        aspect-ratio below fixes the same thing a second way, so browsers
        without subgrid still line up.
      */}
      <div className="relative grid grid-cols-2 grid-rows-[auto_auto] items-end gap-x-3">
        {pair.map((id) => {
          const img = heroSrc[id];
          return (
            <figure key={id} className="row-span-2 grid grid-rows-subgrid">
              <figcaption className="mb-3 self-start rounded-2xl border border-cream-300 bg-cream-50/95 px-3 py-2 text-center text-[12px] font-semibold leading-[1.35] text-ink-900 shadow-[var(--shadow-md)] sm:text-[14px]">
                {t(screens[id].title, locale)}
              </figcaption>
              <Image
                src={img.src}
                alt={t(screens[id].alt, locale)}
                width={img.w}
                height={img.h}
                sizes="(max-width: 640px) 45vw, 230px"
                // Both phones share the shorter image's ratio; the extra 23px
                // on the other one is empty cream above the handset, so
                // cropping from the top removes nothing.
                className={`aspect-[760/1274] w-full self-end rounded-[22px] object-cover object-bottom ring-1 ring-cream-300/80 ${
                  id === "widget" ? "shadow-[var(--shadow-phone)]" : "shadow-[var(--shadow-xl)]"
                }`}
                priority
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
}

/** A single screenshot with its caption — used by the "how it works" steps. */
export function ScreenShot({
  id,
  locale,
  priority = false,
  className = "",
}: {
  id: ScreenId;
  locale: Locale;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={`/product/${id}-${assetLocale(locale)}.webp`}
      alt={t(screens[id].alt, locale)}
      width={SCREEN_SIZE.width}
      height={SCREEN_SIZE.height}
      sizes="(max-width: 640px) 80vw, 320px"
      className={`h-auto w-full ${className}`}
      priority={priority}
      loading={priority ? undefined : "lazy"}
    />
  );
}

/**
 * Horizontal, snap-scrolling carousel of the screens not already shown in the
 * three-step section. Captions are real text under each shot.
 */
export function ProductGallery({
  locale,
  ids,
}: {
  locale: Locale;
  ids: ScreenId[];
}) {
  return (
    <div
      className="product-gallery -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
      role="list"
      aria-label={t(ui.gallery.listAria, locale)}
    >
      {ids.map((id) => (
        <figure
          key={id}
          role="listitem"
          className="flex w-[74vw] max-w-[300px] shrink-0 snap-center flex-col overflow-hidden rounded-[28px] bg-cream-50 shadow-[var(--shadow-lg)] ring-1 ring-cream-300/80 sm:w-[290px]"
        >
          <figcaption className="px-5 pb-1 pt-6 text-center">
            <h3 className="font-display text-[19px] font-semibold leading-[1.25] text-ink-900">
              {t(screens[id].title, locale)}
            </h3>
            <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-500">
              {t(screens[id].sub, locale)}
            </p>
          </figcaption>
          <ScreenShot id={id} locale={locale} className="mt-2" />
        </figure>
      ))}
    </div>
  );
}
