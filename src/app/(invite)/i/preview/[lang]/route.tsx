import { inviteOgContent, renderOgImage } from "@/lib/og";
import { isLocale, locales } from "@/lib/i18n";

/**
 * Authoring source for the invite preview card — NOT what og:image points at.
 *
 * og:image references the static, quantized copies in `public/og/invite-*.png`
 * instead: Zalo's scraper chokes on extension-less image URLs, and Satori's
 * raw PNG output is ~3× heavier than the quantized files. After editing the
 * card (here or in lib/og.tsx), regenerate the public copies:
 *
 *   npm run build && npx next start -p 3789 &
 *   curl -s localhost:3789/i/preview/vi | python3 -c "from PIL import Image; import sys, io; \
 *     Image.open(io.BytesIO(sys.stdin.buffer.read())).convert('RGB').convert('P', \
 *     palette=Image.ADAPTIVE, colors=255).save('public/og/invite-vi.png', optimize=True)"
 *   # same for /en, /fr and /de → public/og/invite-<lang>.png
 *
 * The card never depends on the invite code, so it must NOT live under the
 * dynamic `/i/[code]` segment — that minted a unique image URL per code, each
 * a cold on-demand render. Social scrapers (Facebook/Zalo) with short timeouts
 * would trip on that first cold render and cache a broken preview per link.
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
