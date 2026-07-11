import type { Bilingual, Locale } from "@/lib/i18n";
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
  },
  heading: {
    vi: "Cả nhà mời bạn cùng xem nhật ký của bé",
    en: "You're invited to a baby's diary",
  },
  intro: {
    vi: "Cubi là cuốn nhật ký nhỏ trên điện thoại — nơi cả nhà cùng xem ảnh và từng khoảnh khắc bé lớn lên mỗi ngày.",
    en: "Cubi is a little diary on your phone — where the whole family watches the baby grow, day by day.",
  },
  footer: {
    vi: "cubi.family · Bé lớn từng ngày, thương đầy vòng tay",
    en: "cubi.family · Watch them grow, day by day",
  },
  codeLabel: { vi: "Mã mời của bạn", en: "Your invite code" },
  copy: { vi: "Bấm để sao chép mã", en: "Tap to copy the code" },
  copied: { vi: "Đã sao chép mã ✓", en: "Code copied ✓" },
  autoCopied: {
    vi: "Mã đã được sao chép sẵn cho bạn — vào app chỉ cần dán.",
    en: "The code is already copied for you — just paste it in the app.",
  },
  installTitle: {
    vi: "Chưa có ứng dụng Cubi?",
    en: "Don't have the Cubi app yet?",
  },
  installStep1: {
    vi: "Bấm nút bên dưới để cài Cubi vào điện thoại.",
    en: "Tap the button below to install Cubi on your phone.",
  },
  installStep2: {
    vi: "Cài xong, bạn quay lại tin nhắn và bấm vào đường link lần nữa — hoặc quay lại trang này, bấm “Mở app Cubi”. Mã sẽ tự điền, không cần gõ.",
    en: "Once installed, go back to your message and tap the link again — or come back here and tap “Open the Cubi app”. The code fills in by itself.",
  },
  // The quoted button label must match the app's welcome screen verbatim
  // (l10n key `welcomeCtaHaveCode` in the app repo).
  manualHintBefore: {
    vi: "Nếu cần nhập tay: mở app Cubi, chọn “Tôi có mã mời” rồi nhập mã ",
    en: "If you need to type it in: open Cubi, choose “I have an invite code” and enter ",
  },
  manualHintAfter: { vi: " nhé.", en: "." },
  openTitle: {
    vi: "Đã có app Cubi trong máy?",
    en: "Already have the Cubi app?",
  },
  openAction: { vi: "Mở app Cubi", en: "Open the Cubi app" },
  openHint: {
    vi: "Mã mời sẽ được điền sẵn cho bạn.",
    en: "Your invite code will be filled in for you.",
  },
  openFailed: {
    vi: "Có vẻ điện thoại chưa cài Cubi — bạn cài app ở bước bên trên trước nhé.",
    en: "It looks like Cubi isn't on this phone yet — please install it with the step above first.",
  },
  desktopHint: {
    vi: "Bạn đang xem trên máy tính? Mở đường link này trên điện thoại để cài app và nhập mã nhé.",
    en: "Viewing on a computer? Open this link on your phone to install the app.",
  },
  browserPrompt: {
    vi: "Link không mở được? Có thể bạn đang xem trong Zalo, Facebook hoặc Messenger. Bạn thử mở trang này bằng trình duyệt nhé:",
    en: "Link not working? You may be viewing this inside Zalo, Facebook or Messenger. Try opening this page in your browser:",
  },
  browserAction: { vi: "Mở trong trình duyệt", en: "Open in browser" },
  browserHintBefore: { vi: "Hoặc bấm ", en: "Or tap " },
  browserHintAfter: {
    vi: ' ở góc phải → chọn "Mở trong Safari" / "Mở trong Chrome".',
    en: ' in the top corner → choose "Open in Safari" / "Open in Chrome".',
  },
} satisfies Record<string, Bilingual>;

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
    },
    locale,
  );

export const inviteMetaDescription = (locale: Locale): string =>
  t(
    {
      vi: "Cài app Cubi rồi nhập mã mời để cùng xem nhật ký của bé nhé.",
      en: "Install Cubi and enter the invite code to follow the baby's diary together.",
    },
    locale,
  );

export const inviteCodeAria = (formattedCode: string, locale: Locale): string =>
  t(
    { vi: `Mã mời ${formattedCode}`, en: `Invite code ${formattedCode}` },
    locale,
  );
