import { renderOgImage, OG_SIZE } from "@/lib/og";
import { locales } from "@/lib/i18n";

export const alt = "Cubi — a private baby diary for the whole family";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function Image() {
  return renderOgImage();
}
