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
    vi: "Cài app Cubi rồi nhập mã bên dưới để cùng nhìn bé lớn lên mỗi ngày nhé.",
    en: "Install Cubi and enter the code below to watch the little one grow up together.",
  },
  storeHint: {
    vi: "Sau khi cài, mở app Cubi rồi nhập mã trên nhé.",
    en: "After installing, open Cubi and enter the code above.",
  },
  footer: {
    vi: "cubi.family · Bé lớn từng ngày, thương đầy vòng tay",
    en: "cubi.family · Watch them grow, day by day",
  },
  codeLabel: { vi: "Mã mời", en: "Invite code" },
  copy: { vi: "Sao chép mã", en: "Copy code" },
  copied: { vi: "Đã sao chép mã", en: "Copied" },
  browserPrompt: {
    vi: "Nếu bạn đang mở từ Zalo, Facebook hoặc Messenger và link không hoạt động:",
    en: "If you opened this from Zalo, Facebook or Messenger and the link doesn't work:",
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
