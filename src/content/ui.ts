import type { Localized } from "@/lib/i18n";

/** Chrome / navigation strings (not part of the generated marketing copy). */
export const ui = {
  nav: {
    features: { vi: "Tính năng", en: "Features", fr: "Fonctionnalités", de: "Funktionen" } as Localized,
    how: { vi: "Cách dùng", en: "How it works", fr: "Comment ça marche", de: "So funktioniert's" } as Localized,
    guides: { vi: "Cẩm nang", en: "Guides", fr: "Guides", de: "Ratgeber" } as Localized,
    philosophy: { vi: "Triết lý", en: "Philosophy", fr: "Philosophie", de: "Haltung" } as Localized,
    faq: { vi: "Hỏi đáp", en: "FAQ", fr: "Questions", de: "Fragen" } as Localized,
    download: { vi: "Tải Cubi", en: "Get Cubi", fr: "Obtenir Cubi", de: "Cubi holen" } as Localized,
  },
  skipToContent: { vi: "Tới nội dung chính", en: "Skip to content", fr: "Aller au contenu principal", de: "Zum Inhalt springen" } as Localized,
  menu: { vi: "Menu", en: "Menu", fr: "Menu", de: "Menü" } as Localized,
  close: { vi: "Đóng", en: "Close", fr: "Fermer", de: "Schließen" } as Localized,
  switchLanguage: {
    vi: "Đổi ngôn ngữ",
    en: "Change language",
    fr: "Changer de langue",
    de: "Sprache ändern",
  } as Localized,
  // Store badge copy: device names, not store brands — "App Store"/"CH Play"
  // mean nothing to the grandparents the invite flow targets.
  store: {
    downloadOn: { vi: "Tải về trên", en: "Download for", fr: "Télécharger pour", de: "Herunterladen für" } as Localized,
    iphone: { vi: "iPhone", en: "iPhone", fr: "iPhone", de: "iPhone" } as Localized,
    android: { vi: "Android", en: "Android", fr: "Android", de: "Android" } as Localized,
    comingSoonIphone: {
      vi: "Sắp có trên iPhone",
      en: "Coming soon for iPhone",
      fr: "Bientôt sur iPhone",
      de: "Bald für iPhone",
    } as Localized,
  },
  backHome: { vi: "Về trang chủ", en: "Back to home", fr: "Retour à l'accueil", de: "Zurück zur Startseite" } as Localized,
  backToTop: { vi: "Lên đầu trang", en: "Back to top", fr: "Haut de page", de: "Nach oben" } as Localized,
  lastUpdated: { vi: "Cập nhật lần cuối", en: "Last updated", fr: "Dernière mise à jour", de: "Zuletzt aktualisiert" } as Localized,
  effectiveDate: { vi: "9 tháng 6, 2026", en: "June 9, 2026", fr: "9 juin 2026", de: "9. Juni 2026" } as Localized,
  footer: {
    product: { vi: "Sản phẩm", en: "Product", fr: "Produit", de: "Produkt" } as Localized,
    legal: { vi: "Pháp lý", en: "Legal", fr: "Mentions légales", de: "Rechtliches" } as Localized,
    contact: { vi: "Liên hệ", en: "Contact", fr: "Contact", de: "Kontakt" } as Localized,
    terms: { vi: "Điều khoản sử dụng", en: "Terms of Service", fr: "Conditions d'utilisation", de: "Nutzungsbedingungen" } as Localized,
    privacy: { vi: "Chính sách bảo mật", en: "Privacy Policy", fr: "Politique de confidentialité", de: "Datenschutzerklärung" } as Localized,
    support: { vi: "Hỗ trợ", en: "Support", fr: "Aide", de: "Hilfe" } as Localized,
    deleteAccount: { vi: "Xóa tài khoản", en: "Account deletion", fr: "Supprimer le compte", de: "Konto löschen" } as Localized,
    madeIn: { vi: "Làm tại Việt Nam", en: "Made in Vietnam", fr: "Fait au Vietnam", de: "Gemacht in Vietnam" } as Localized,
    rights: {
      vi: "Cubi. Bảo lưu mọi quyền.",
      en: "Cubi. All rights reserved.",
      fr: "Cubi. Tous droits réservés.",
      de: "Cubi. Alle Rechte vorbehalten.",
    } as Localized,
  },
  pages: {
    terms: { vi: "Điều khoản sử dụng", en: "Terms of Service", fr: "Conditions d'utilisation", de: "Nutzungsbedingungen" } as Localized,
    privacy: { vi: "Chính sách bảo mật", en: "Privacy Policy", fr: "Politique de confidentialité", de: "Datenschutzerklärung" } as Localized,
    support: { vi: "Hỗ trợ", en: "Support", fr: "Aide", de: "Hilfe" } as Localized,
    delete: { vi: "Xóa tài khoản", en: "Account deletion", fr: "Supprimer le compte", de: "Konto löschen" } as Localized,
    download: { vi: "Tải Cubi", en: "Get Cubi", fr: "Obtenir Cubi", de: "Cubi holen" } as Localized,
    guides: { vi: "Cẩm nang", en: "Guides", fr: "Guides", de: "Ratgeber" } as Localized,
    about: { vi: "Về Cubi", en: "About Cubi", fr: "À propos de Cubi", de: "Über Cubi" } as Localized,
  },
  guides: {
    faqHeading: { vi: "Câu hỏi thường gặp", en: "Frequently asked", fr: "Questions fréquentes", de: "Häufige Fragen" } as Localized,
    title: {
      vi: "Cẩm nang cho bố mẹ",
      en: "Guides for parents",
      fr: "Guides pour les parents",
      de: "Ratgeber für Eltern",
    } as Localized,
    intro: {
      vi: "Vài bài viết ngắn về chuyện giữ lại và chia sẻ hình ảnh của con — viết để hữu ích kể cả khi cả nhà không dùng Cubi.",
      en: "Short pieces about keeping and sharing pictures of your child — written to be useful whether or not you use Cubi.",
      fr: "De courts articles sur la façon de garder et de partager les photos de votre enfant — utiles que vous utilisiez Cubi ou non.",
      de: "Kurze Texte darüber, wie du die Fotos deines Kindes bewahrst und teilst — hilfreich, ob du Cubi nutzt oder nicht.",
    } as Localized,
    readMore: { vi: "Đọc tiếp", en: "Read more", fr: "Lire la suite", de: "Weiterlesen" } as Localized,
    back: { vi: "Về Cẩm nang", en: "Back to Guides", fr: "Retour aux guides", de: "Zurück zum Ratgeber" } as Localized,
    alsoRead: { vi: "Đọc thêm", en: "Read next", fr: "À lire ensuite", de: "Weiter lesen" } as Localized,
    inThisArticle: { vi: "Trong bài này", en: "In this article", fr: "Dans cet article", de: "In diesem Artikel" } as Localized,
  },
  about: {
    title: {
      vi: "Cubi được làm ra như thế nào",
      en: "How Cubi came to be",
      fr: "Comment Cubi est né",
      de: "Wie Cubi entstanden ist",
    } as Localized,
  },
  support: {
    emailLabel: { vi: "Email hỗ trợ", en: "Support email", fr: "E-mail d'assistance", de: "Hilfe-E-Mail" } as Localized,
    emailCta: { vi: "Viết thư cho Cubi", en: "Email us", fr: "Écrire à Cubi", de: "Schreib uns" } as Localized,
    title: {
      vi: "Cubi luôn ở đây cùng cả nhà",
      en: "We're here to help",
      fr: "Cubi est là pour vous",
      de: "Cubi ist für euch da",
    } as Localized,
  },
  // Screenshot carousel — spoken labels for the two image groups.
  gallery: {
    heroAria: {
      vi: "Cubi từ máy mẹ đến màn hình của bà",
      en: "Cubi from mom's phone to grandma's home screen",
      fr: "Cubi, du téléphone de maman à l'écran d'accueil de mamie",
      de: "Cubi — vom Handy der Mama auf den Homescreen der Oma",
    } as Localized,
    listAria: {
      vi: "Các màn hình và tính năng thật của Cubi",
      en: "Real Cubi screens and features",
      fr: "Les vrais écrans et fonctions de Cubi",
      de: "Echte Cubi-Screens und -Funktionen",
    } as Localized,
  },
  // The illustrated phone on the landing page — a mock widget, not real data.
  demo: {
    age: { vi: "6 tháng 12 ngày", en: "6 months 12 days", fr: "6 mois 12 jours", de: "6 Monate 12 Tage" } as Localized,
    reactionFrom: { vi: "Bà ngoại", en: "Grandma", fr: "Mamie", de: "Oma" } as Localized,
    reactionVerb: { vi: "vừa thả tim", en: "sent a heart", fr: "a envoyé un cœur", de: "hat ein Herz geschickt" } as Localized,
    widgetCaption: {
      vi: "Bống đang lớn mỗi ngày",
      en: "Bống is growing every day",
      fr: "Bống grandit un peu chaque jour",
      de: "Bống wächst jeden Tag ein Stück",
    } as Localized,
  },
} as const;
