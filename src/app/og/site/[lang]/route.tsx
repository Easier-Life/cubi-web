import { renderOgImage, siteOgContent } from "@/lib/og";
import { isLocale, locales } from "@/lib/i18n";

/**
 * Authoring source for the marketing Open Graph card — NOT what og:image
 * points at. Same reasoning as the invite card (see i/preview/[lang]/route.tsx):
 * og:image references the static, quantized copies in `public/og/site-*.png`,
 * because Zalo's scraper chokes on extension-less image URLs and Satori's raw
 * PNG output is far heavier than a quantized file.
 *
 * After editing the card (here or in lib/og.tsx), regenerate the public copies:
 *
 *   npm run build && npx next start -p 3789 &
 *   curl -s localhost:3789/og/site/vi | python3 -c "from PIL import Image; import sys, io; \
 *     Image.open(io.BytesIO(sys.stdin.buffer.read())).convert('RGB').convert('P', \
 *     palette=Image.ADAPTIVE, colors=255).save('public/og/site-vi.png', optimize=True)"
 *   # same for /en, /fr and /de → public/og/site-<lang>.png
 *
 * This replaced a file-convention `opengraph-image.tsx` under `(site)/[lang]`:
 * that only ever attached an image to the home page — every legal/support page
 * set its own `openGraph` in generateMetadata, which replaced the inherited
 * images and left those pages sharing as a blank `summary_large_image` card.
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
  return renderOgImage(siteOgContent[locale]);
}
