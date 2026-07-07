import { inviteOgContent, renderOgImage } from "@/lib/og";
import { isLocale, locales } from "@/lib/i18n";

/**
 * One shared, localized preview image for every invite link.
 *
 * The card never depends on the invite code, so it must NOT live under the
 * dynamic `/i/[code]` segment — that minted a unique image URL per code, each
 * a cold on-demand render. Social scrapers (Facebook/Zalo) with short timeouts
 * would trip on that first cold render and cache a broken preview per link.
 *
 * Here there are exactly two URLs — `/i/preview/vi` and `/i/preview/en` —
 * prerendered at build (`force-static`) and served from the CDN, so every
 * invite of a given language points at the same warm, instant image.
 */
export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "vi";
  return renderOgImage(inviteOgContent[locale]);
}
