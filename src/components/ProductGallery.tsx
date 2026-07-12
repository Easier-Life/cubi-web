import Image from "next/image";
import { type Bilingual, type Locale, t } from "@/lib/i18n";

const screens: { id: string; alt: Bilingual }[] = [
  {
    id: "moment",
    alt: {
      vi: "Màn hình Cubi để mẹ chọn ảnh, viết vài dòng và lưu khoảnh khắc của bé",
      en: "Cubi screen where a parent selects photos, writes a line and keeps a baby's moment",
    },
  },
  {
    id: "widget",
    alt: {
      vi: "Widget Cubi trên màn hình chính của bà, tự hiện ảnh mới và tuổi của bé",
      en: "Cubi home-screen widget showing grandma a new baby photo and the baby's age",
    },
  },
  {
    id: "diary",
    alt: {
      vi: "Dòng nhật ký riêng của bé trong Cubi với ảnh, chú thích, tuổi và phản ứng gia đình",
      en: "A private Cubi baby diary with photos, captions, age and family reactions",
    },
  },
  {
    id: "film",
    alt: {
      vi: "Màn hình Cubi biến ảnh trong nhật ký thành thước phim kỉ niệm có nhạc",
      en: "Cubi screen turning diary photos into a keepsake film with music",
    },
  },
  {
    id: "privacy",
    alt: {
      vi: "Màn hình Cubi cho bố mẹ chọn ai được xem từng khoảnh khắc của bé",
      en: "Cubi screen where parents choose who can see each baby's moment",
    },
  },
  {
    id: "hearts",
    alt: {
      vi: "Màn hình phản ứng Cubi chỉ có emoji và trái tim, không có bình luận gây áp lực",
      en: "Cubi reactions screen with emoji and hearts, without pressured comments",
    },
  },
  {
    id: "invite",
    alt: {
      vi: "Màn hình nhập mã mời Cubi để ông bà vào xem bé mà không cần đăng ký",
      en: "Cubi invite-code screen where grandparents join without signing up",
    },
  },
  {
    id: "sharp",
    alt: {
      vi: "Ảnh bé toàn màn hình trong Cubi, giữ nét và có tuổi của bé",
      en: "A sharp full-screen baby photo in Cubi with the baby's age",
    },
  },
];

export function HeroProductVisual({ locale }: { locale: Locale }) {
  const momentLabel = locale === "vi" ? "Mẹ lưu một khoảnh khắc" : "Mom keeps a moment";
  const widgetLabel = locale === "vi" ? "Bà thấy ngay tức khắc" : "Grandma sees it right away";

  return (
    <div className="relative mx-auto h-[470px] w-full max-w-[390px] sm:h-[570px] sm:max-w-[470px]" aria-label={locale === "vi" ? "Cubi từ máy mẹ đến màn hình của bà" : "Cubi from mom's phone to grandma's home screen"}>
      <div aria-hidden="true" className="absolute inset-x-6 bottom-5 top-10 rounded-full bg-honey-100/70 blur-3xl" />
      <div className="absolute inset-x-0 top-0 z-30 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-cream-300 bg-cream-50/95 px-3 py-2 text-center text-[12px] font-semibold leading-[1.35] text-ink-900 shadow-[var(--shadow-md)] sm:text-[14px]">
          {momentLabel}
        </div>
        <div className="rounded-2xl border border-cream-300 bg-cream-50/95 px-3 py-2 text-center text-[12px] font-semibold leading-[1.35] text-ink-900 shadow-[var(--shadow-md)] sm:text-[14px]">
          {widgetLabel}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 items-end gap-3">
        <Image
          src={`/product/hero-moment-${locale}.webp`}
          alt={t(screens[0].alt, locale)}
          width={760}
          height={1297}
          sizes="(max-width: 640px) 47vw, 230px"
          className="h-auto w-full rounded-[22px] shadow-[var(--shadow-xl)] ring-1 ring-cream-300/80"
          priority
        />
        <Image
          src={`/product/hero-widget-${locale}.webp`}
          alt={t(screens[1].alt, locale)}
          width={760}
          height={1274}
          sizes="(max-width: 640px) 47vw, 230px"
          className="h-auto w-full rounded-[22px] shadow-[var(--shadow-phone)] ring-1 ring-cream-300/80"
          priority
        />
      </div>
    </div>
  );
}

export function ProductGallery({ locale }: { locale: Locale }) {
  return (
    <div
      className="product-gallery -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
      role="list"
      aria-label={locale === "vi" ? "Các màn hình và tính năng thật của Cubi" : "Real Cubi screens and features"}
    >
      {screens.map((screen) => (
        <figure
          key={screen.id}
          role="listitem"
          className="w-[76vw] max-w-[310px] shrink-0 snap-center overflow-hidden rounded-[28px] bg-cream-50 shadow-[var(--shadow-lg)] ring-1 ring-cream-300/80 sm:w-[300px] lg:max-w-[290px]"
        >
          <Image
            src={`/product/${screen.id}-${locale}.webp`}
            alt={t(screen.alt, locale)}
            width={900}
            height={1955}
            sizes="(max-width: 640px) 76vw, 300px"
            className="h-auto w-full"
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  );
}
