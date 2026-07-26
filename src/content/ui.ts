import type { Bilingual } from "@/lib/i18n";

/** Chrome / navigation strings (not part of the generated marketing copy). */
export const ui = {
  nav: {
    features: { vi: "Tính năng", en: "Features" } as Bilingual,
    how: { vi: "Cách dùng", en: "How it works" } as Bilingual,
    guides: { vi: "Cẩm nang", en: "Guides" } as Bilingual,
    philosophy: { vi: "Triết lý", en: "Philosophy" } as Bilingual,
    faq: { vi: "Hỏi đáp", en: "FAQ" } as Bilingual,
    download: { vi: "Tải Cubi", en: "Get Cubi" } as Bilingual,
  },
  skipToContent: { vi: "Tới nội dung chính", en: "Skip to content" } as Bilingual,
  menu: { vi: "Menu", en: "Menu" } as Bilingual,
  close: { vi: "Đóng", en: "Close" } as Bilingual,
  switchLanguage: {
    vi: "Chuyển sang tiếng Anh",
    en: "Switch to Vietnamese",
  } as Bilingual,
  // Store badge copy: device names, not store brands — "App Store"/"CH Play"
  // mean nothing to the grandparents the invite flow targets.
  store: {
    downloadOn: { vi: "Tải về trên", en: "Download for" } as Bilingual,
    iphone: { vi: "iPhone", en: "iPhone" } as Bilingual,
    android: { vi: "Android", en: "Android" } as Bilingual,
    comingSoonIphone: {
      vi: "Sắp có trên iPhone",
      en: "Coming soon for iPhone",
    } as Bilingual,
  },
  backHome: { vi: "Về trang chủ", en: "Back to home" } as Bilingual,
  backToTop: { vi: "Lên đầu trang", en: "Back to top" } as Bilingual,
  lastUpdated: { vi: "Cập nhật lần cuối", en: "Last updated" } as Bilingual,
  effectiveDate: { vi: "9 tháng 6, 2026", en: "June 9, 2026" } as Bilingual,
  footer: {
    product: { vi: "Sản phẩm", en: "Product" } as Bilingual,
    legal: { vi: "Pháp lý", en: "Legal" } as Bilingual,
    contact: { vi: "Liên hệ", en: "Contact" } as Bilingual,
    terms: { vi: "Điều khoản sử dụng", en: "Terms of Service" } as Bilingual,
    privacy: { vi: "Chính sách bảo mật", en: "Privacy Policy" } as Bilingual,
    support: { vi: "Hỗ trợ", en: "Support" } as Bilingual,
    deleteAccount: { vi: "Xóa tài khoản", en: "Account deletion" } as Bilingual,
    madeIn: { vi: "Làm tại Việt Nam", en: "Made in Vietnam" } as Bilingual,
    rights: {
      vi: "Cubi. Bảo lưu mọi quyền.",
      en: "Cubi. All rights reserved.",
    } as Bilingual,
  },
  pages: {
    terms: { vi: "Điều khoản sử dụng", en: "Terms of Service" } as Bilingual,
    privacy: { vi: "Chính sách bảo mật", en: "Privacy Policy" } as Bilingual,
    support: { vi: "Hỗ trợ", en: "Support" } as Bilingual,
    delete: { vi: "Xóa tài khoản", en: "Account deletion" } as Bilingual,
    download: { vi: "Tải Cubi", en: "Get Cubi" } as Bilingual,
    guides: { vi: "Cẩm nang", en: "Guides" } as Bilingual,
    about: { vi: "Về Cubi", en: "About Cubi" } as Bilingual,
  },
  guides: {
    title: {
      vi: "Cẩm nang cho bố mẹ",
      en: "Guides for parents",
    } as Bilingual,
    intro: {
      vi: "Vài bài viết ngắn về chuyện giữ lại và chia sẻ hình ảnh của con — viết để hữu ích kể cả khi cả nhà không dùng Cubi.",
      en: "Short pieces about keeping and sharing pictures of your child — written to be useful whether or not you use Cubi.",
    } as Bilingual,
    readMore: { vi: "Đọc tiếp", en: "Read more" } as Bilingual,
    back: { vi: "Về Cẩm nang", en: "Back to Guides" } as Bilingual,
    alsoRead: { vi: "Đọc thêm", en: "Read next" } as Bilingual,
    inThisArticle: { vi: "Trong bài này", en: "In this article" } as Bilingual,
  },
  about: {
    title: {
      vi: "Cubi được làm ra như thế nào",
      en: "How Cubi came to be",
    } as Bilingual,
  },
  support: {
    emailLabel: { vi: "Email hỗ trợ", en: "Support email" } as Bilingual,
    title: {
      vi: "Cubi luôn ở đây cùng cả nhà",
      en: "We're here to help",
    } as Bilingual,
  },
} as const;
