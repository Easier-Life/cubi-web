import type { Bilingual } from "@/lib/i18n";

/** Chrome / navigation strings (not part of the generated marketing copy). */
export const ui = {
  nav: {
    features: { vi: "Tính năng", en: "Features" } as Bilingual,
    how: { vi: "Cách dùng", en: "How it works" } as Bilingual,
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
  comingSoon: {
    vi: "Sắp có trên App Store",
    en: "Coming soon to the App Store",
  } as Bilingual,
  appStore: { vi: "Tải trên App Store", en: "Download on the App Store" } as Bilingual,
  playStore: { vi: "Tải trên Google Play", en: "Get it on Google Play" } as Bilingual,
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
  },
  support: {
    emailLabel: { vi: "Email hỗ trợ", en: "Support email" } as Bilingual,
    title: {
      vi: "Cubi luôn ở đây cùng cả nhà",
      en: "We're here to help",
    } as Bilingual,
  },
} as const;
