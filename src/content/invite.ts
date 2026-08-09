import type { Localized, Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

/**
 * Copy for the invite-link landing page (`/i/[code]`), keyed by the sharer's
 * language. The language rides on the link as `?l=` when the app builds it, so
 * the recipient sees the page — and the preview card — in the language the
 * inviter was using.
 */
const strings = {
  eyebrow: {
    vi: "Cubi · Nhật ký bé cho cả nhà",
    en: "Cubi · A baby diary for the whole family",
    fr: "Cubi · Le journal de bébé pour toute la famille",
    de: "Cubi · Das Babytagebuch für die ganze Familie",
  },
  heading: {
    vi: "Cả nhà mời bạn cùng xem nhật ký của bé",
    en: "You're invited to a baby's diary",
    fr: "Une famille vous invite à suivre le journal de son bébé",
    de: "Eine Familie lädt dich zu ihrem Babytagebuch ein",
  },
  intro: {
    vi: "Cubi là cuốn nhật ký nhỏ trên điện thoại — nơi cả nhà cùng xem ảnh và từng khoảnh khắc bé lớn lên mỗi ngày.",
    en: "Cubi is a little diary on your phone — where the whole family watches the baby grow, day by day.",
    fr: "Cubi est un petit journal sur votre téléphone — là où toute la famille voit le bébé grandir, jour après jour.",
    de: "Cubi ist ein kleines Tagebuch auf deinem Handy — hier sieht die ganze Familie, wie das Baby wächst, Tag für Tag.",
  },
  footer: {
    vi: "cubi.family · Bé lớn từng ngày, thương đầy vòng tay",
    en: "cubi.family · Watch them grow, day by day",
    fr: "cubi.family · Les petits jours, gardés pour toujours",
    de: "cubi.family · Jeder Tag zählt — für immer erzählt",
  },
  codeLabel: { vi: "Mã mời của bạn", en: "Your invite code", fr: "Votre code d'invitation", de: "Dein Einladungscode" },
  copy: { vi: "Bấm để sao chép mã", en: "Tap to copy the code", fr: "Touchez pour copier le code", de: "Tippen, um den Code zu kopieren" },
  copied: { vi: "Đã sao chép mã ✓", en: "Code copied ✓", fr: "Code copié ✓", de: "Code kopiert ✓" },
  autoCopied: {
    vi: "Mã đã được sao chép sẵn cho bạn — vào app chỉ cần dán.",
    en: "The code is already copied for you — just paste it in the app.",
    fr: "Le code est déjà copié pour vous — il ne reste qu'à le coller dans l'app.",
    de: "Der Code ist schon für dich kopiert — du musst ihn in der App nur einfügen.",
  },
  installTitle: {
    vi: "Chưa có ứng dụng Cubi?",
    en: "Don't have the Cubi app yet?",
    fr: "Vous n'avez pas encore l'app Cubi ?",
    de: "Du hast die Cubi-App noch nicht?",
  },
  installStep1: {
    vi: "Bấm nút bên dưới để cài Cubi vào điện thoại.",
    en: "Tap the button below to install Cubi on your phone.",
    fr: "Touchez le bouton ci-dessous pour installer Cubi sur votre téléphone.",
    de: "Tippe auf den Knopf unten, um Cubi auf deinem Handy zu installieren.",
  },
  installStep2: {
    vi: "Cài xong, bạn quay lại tin nhắn và bấm vào đường link lần nữa — hoặc quay lại trang này, bấm “Mở app Cubi”. Mã sẽ tự điền, không cần gõ.",
    en: "Once installed, go back to your message and tap the link again — or come back here and tap “Open the Cubi app”. The code fills in by itself.",
    fr: "Une fois l'app installée, revenez à votre message et touchez à nouveau le lien — ou revenez ici et touchez « Ouvrir l'app Cubi ». Le code se remplit tout seul.",
    de: "Nach der Installation gehst du zurück zu deiner Nachricht und tippst noch einmal auf den Link — oder du kommst hierher zurück und tippst auf „Cubi-App öffnen“. Der Code trägt sich von allein ein.",
  },
  // The quoted button label must match the app's welcome screen verbatim
  // (l10n key `welcomeCtaHaveCode` in the app repo).
  manualHintBefore: {
    vi: "Nếu cần nhập tay: mở app Cubi, chọn “Tôi có mã mời” rồi nhập mã ",
    en: "If you need to type it in: open Cubi, choose “I have an invite code” and enter ",
    fr: "S'il faut le saisir à la main : ouvrez Cubi, choisissez « J'ai un code d'invitation » et entrez ",
    de: "Falls du ihn von Hand eingeben musst: Cubi öffnen, „Ich habe einen Einladungscode“ wählen und eingeben: ",
  },
  manualHintAfter: { vi: " nhé.", en: ".", fr: ".", de: "." },
  openTitle: {
    vi: "Đã có app Cubi trong máy?",
    en: "Already have the Cubi app?",
    fr: "Vous avez déjà l'app Cubi ?",
    de: "Du hast die Cubi-App schon?",
  },
  openAction: { vi: "Mở app Cubi", en: "Open the Cubi app", fr: "Ouvrir l'app Cubi", de: "Cubi-App öffnen" },
  openHint: {
    vi: "Mã mời sẽ được điền sẵn cho bạn.",
    en: "Your invite code will be filled in for you.",
    fr: "Votre code d'invitation sera rempli automatiquement.",
    de: "Dein Einladungscode wird automatisch eingetragen.",
  },
  openFailed: {
    vi: "Có vẻ điện thoại chưa cài Cubi — bạn cài app ở bước bên trên trước nhé.",
    en: "It looks like Cubi isn't on this phone yet — please install it with the step above first.",
    fr: "Cubi ne semble pas encore installé sur ce téléphone — installez-le d'abord à l'étape ci-dessus.",
    de: "Cubi scheint auf diesem Handy noch nicht installiert zu sein — installiere es bitte zuerst über den Schritt oben.",
  },
  desktopHint: {
    vi: "Bạn đang xem trên máy tính? Mở đường link này trên điện thoại để cài app và nhập mã nhé.",
    en: "Viewing on a computer? Open this link on your phone to install the app.",
    fr: "Vous êtes sur un ordinateur ? Ouvrez ce lien sur votre téléphone pour installer l'app.",
    de: "Du bist am Computer? Öffne diesen Link auf deinem Handy, um die App zu installieren.",
  },
  browserPrompt: {
    vi: "Link không mở được? Có thể bạn đang xem trong Zalo, Facebook hoặc Messenger. Bạn thử mở trang này bằng trình duyệt nhé:",
    en: "Link not working? You may be viewing this inside Zalo, Facebook or Messenger. Try opening this page in your browser:",
    fr: "Le lien ne s'ouvre pas ? Vous êtes peut-être dans Zalo, Facebook ou Messenger. Essayez d'ouvrir cette page dans votre navigateur :",
    de: "Der Link öffnet sich nicht? Vielleicht bist du gerade in Zalo, Facebook oder Messenger. Öffne diese Seite am besten im Browser:",
  },
  browserAction: { vi: "Mở trong trình duyệt", en: "Open in browser", fr: "Ouvrir dans le navigateur", de: "Im Browser öffnen" },
  browserHintBefore: { vi: "Hoặc bấm ", en: "Or tap ", fr: "Ou touchez ", de: "Oder tippe auf " },
  browserHintAfter: {
    vi: ' ở góc phải → chọn "Mở trong Safari" / "Mở trong Chrome".',
    en: ' in the top corner → choose "Open in Safari" / "Open in Chrome".',
    fr: ' dans le coin → choisissez « Ouvrir dans Safari » / « Ouvrir dans Chrome ».',
    de: ' oben in der Ecke → wähle „In Safari öffnen“ / „In Chrome öffnen“.',
  },
} satisfies Record<string, Localized>;

export type InviteCopy = Record<keyof typeof strings, string>;

/** Resolve all invite copy for a locale, plus the code-aware strings. */
export function inviteCopy(locale: Locale): InviteCopy {
  return Object.fromEntries(
    Object.entries(strings).map(([key, value]) => [key, t(value, locale)]),
  ) as InviteCopy;
}

export const inviteMetaTitle = (formattedCode: string, locale: Locale): string =>
  t(
    {
      vi: `Mời vào Cubi · ${formattedCode}`,
      en: `You're invited to Cubi · ${formattedCode}`,
      fr: `Invitation Cubi · ${formattedCode}`,
      de: `Cubi-Einladung · ${formattedCode}`,
    },
    locale,
  );

export const inviteMetaDescription = (locale: Locale): string =>
  t(
    {
      vi: "Cài app Cubi rồi nhập mã mời để cùng xem nhật ký của bé nhé.",
      en: "Install Cubi and enter the invite code to follow the baby's diary together.",
      fr: "Installez Cubi et saisissez le code d'invitation pour suivre le journal du bébé avec la famille.",
      de: "Installiere Cubi und gib den Einladungscode ein, um das Babytagebuch mitzulesen.",
    },
    locale,
  );

export const inviteCodeAria = (formattedCode: string, locale: Locale): string =>
  t(
    {
      vi: `Mã mời ${formattedCode}`,
      en: `Invite code ${formattedCode}`,
      fr: `Code d'invitation ${formattedCode}`,
      de: `Einladungscode ${formattedCode}`,
    },
    locale,
  );
