import Image from "next/image";
import { type Bilingual, type Locale, t } from "@/lib/i18n";

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

export type Screen = { id: ScreenId; title: Bilingual; sub: Bilingual; alt: Bilingual };

export const screens: Record<ScreenId, Screen> = {
  moment: {
    id: "moment",
    title: { vi: "Mẹ lưu một khoảnh khắc", en: "Mom saves a moment" },
    sub: {
      vi: "Chọn ảnh, viết vài dòng — ba mươi giây là xong.",
      en: "Pick photos, write a line — done in thirty seconds.",
    },
    alt: {
      vi: "Màn hình Cubi để mẹ chọn ảnh, viết vài dòng và lưu khoảnh khắc của bé",
      en: "Cubi screen where a parent selects photos, writes a line and keeps a baby's moment",
    },
  },
  widget: {
    id: "widget",
    title: { vi: "Bà thấy ngay tức khắc", en: "Grandma sees it instantly" },
    sub: {
      vi: "Ảnh mới tự hiện ở màn hình chính, không cần mở app.",
      en: "New photos appear right on her home screen.",
    },
    alt: {
      vi: "Widget Cubi trên màn hình chính của bà, tự hiện ảnh mới và tuổi của bé",
      en: "Cubi home-screen widget showing grandma a new baby photo and the baby's age",
    },
  },
  diary: {
    id: "diary",
    title: { vi: "Nhật ký riêng, lớn lên cùng bé", en: "A private diary, growing with your baby" },
    sub: {
      vi: "Mỗi khoảnh khắc gắn với tuổi của bé hôm ấy.",
      en: "Every moment kept with baby's exact age.",
    },
    alt: {
      vi: "Dòng nhật ký riêng của bé trong Cubi với ảnh, chú thích, tuổi và phản ứng gia đình",
      en: "A private Cubi baby diary with photos, captions, age and family reactions",
    },
  },
  film: {
    id: "film",
    // Deliberately not the same wording as the "film" feature card below it —
    // two identical h3s on one page read as a duplicate to screen readers.
    title: { vi: "Xuất thành video có nhạc", en: "Export a video with music" },
    sub: {
      vi: "Chọn ảnh, chọn mẫu — xuất video gửi cả nhà.",
      en: "Pick photos and a style — export a video to share.",
    },
    alt: {
      vi: "Màn hình Cubi biến ảnh trong nhật ký thành thước phim kỉ niệm có nhạc",
      en: "Cubi screen turning diary photos into a keepsake film with music",
    },
  },
  privacy: {
    id: "privacy",
    title: { vi: "Chỉ nhà mình thấy", en: "Only your family can see" },
    sub: {
      vi: "Không công khai, không người lạ — mẹ là người quyết định.",
      en: "Not social media. No strangers. You decide.",
    },
    alt: {
      vi: "Màn hình Cubi cho bố mẹ chọn ai được xem từng khoảnh khắc của bé",
      en: "Cubi screen where parents choose who can see each baby's moment",
    },
  },
  hearts: {
    id: "hearts",
    title: { vi: "Cả nhà thả tim, không áp lực", en: "The whole family, one tap away" },
    sub: {
      vi: "Chỉ emoji, không bình luận — bà chạm một cái là xong.",
      en: "Emoji only — no comments, no pressure.",
    },
    alt: {
      vi: "Màn hình phản ứng Cubi chỉ có emoji và trái tim, không có bình luận gây áp lực",
      en: "Cubi reactions screen with emoji and hearts, without pressured comments",
    },
  },
  invite: {
    id: "invite",
    title: { vi: "Nhập mã là vào, không đăng ký", en: "Grandparents join with one code" },
    sub: {
      vi: "Ông bà không cần tài khoản, không mật khẩu.",
      en: "No account, no password — just one code.",
    },
    alt: {
      vi: "Màn hình nhập mã mời Cubi để ông bà vào xem bé mà không cần đăng ký",
      en: "Cubi invite-code screen where grandparents join without signing up",
    },
  },
  sharp: {
    id: "sharp",
    title: { vi: "Ảnh nét, không trôi trong nhóm chat", en: "Sharp photos, never lost in chat" },
    sub: {
      vi: "Album của bé gọn một nơi, xem lại lúc nào cũng được.",
      en: "Every moment in one place, forever.",
    },
    alt: {
      vi: "Ảnh bé toàn màn hình trong Cubi, giữ nét và có tuổi của bé",
      en: "A sharp full-screen baby photo in Cubi with the baby's age",
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
  const heroSrc: Record<string, { src: string; w: number; h: number }> = {
    moment: { src: `/product/hero-moment-${locale}.webp`, w: 760, h: 1297 },
    widget: { src: `/product/hero-widget-${locale}.webp`, w: 760, h: 1274 },
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[390px] sm:max-w-[470px]"
      aria-label={
        locale === "vi"
          ? "Cubi từ máy mẹ đến màn hình của bà"
          : "Cubi from mom's phone to grandma's home screen"
      }
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
      src={`/product/${id}-${locale}.webp`}
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
      aria-label={
        locale === "vi"
          ? "Các màn hình và tính năng thật của Cubi"
          : "Real Cubi screens and features"
      }
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
