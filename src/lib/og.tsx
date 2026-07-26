import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { OG_SIZE } from "@/lib/og-meta";

// Re-exported so existing importers (the invite + marketing card routes) keep
// a single entry point; the data itself lives in lib/og-meta.ts.
export { OG_SIZE, inviteOgContent, siteOgContent, siteOgAlt } from "@/lib/og-meta";

function asset(...parts: string[]): string {
  return join(process.cwd(), "public", ...parts);
}

/** The real app icon (crescent moon + daisy), identical to the phone icon. */
async function markDataUri(): Promise<string> {
  const png = await readFile(asset("app-icon-192.png"));
  return `data:image/png;base64,${png.toString("base64")}`;
}

/**
 * Be Vietnam Pro TTFs, bundled in public/ so they read reliably at build time
 * on Vercel (same proven path as the app icon above). Satori — the engine
 * behind next/og — cannot read woff2, so we ship real .ttf files. Embedding
 * the font is what lets the card render Vietnamese diacritics (ộ, ữ, ế…)
 * instead of tofu boxes, so the invite card can be localized.
 */
async function loadFonts() {
  const [regular, bold] = await Promise.all([
    readFile(asset("fonts", "BeVietnamPro-Regular.ttf")),
    readFile(asset("fonts", "BeVietnamPro-Bold.ttf")),
  ]);
  return [
    { name: "Be Vietnam Pro", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Be Vietnam Pro", data: bold, weight: 700 as const, style: "normal" as const },
  ];
}

/**
 * Brand Open Graph card. Renders with the bundled Be Vietnam Pro font so it
 * reads warmly in both Vietnamese and English, and stays the same card across
 * the marketing pages and the invite links.
 */
export async function renderOgImage({
  title = "Cubi",
  subtitle = "Tiny moments, kept forever.",
  footer = "cubi.family · A private baby diary for the whole family",
}: {
  title?: string;
  subtitle?: string;
  footer?: string;
} = {}) {
  const [mark, fonts] = await Promise.all([markDataUri(), loadFonts()]);
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "84px",
          justifyContent: "space-between",
          fontFamily: "Be Vietnam Pro",
          backgroundColor: "#f8f3ec",
          backgroundImage:
            "radial-gradient(120% 90% at 50% -10%, #f5e4c0 0%, rgba(248,243,236,0) 60%), radial-gradient(80% 60% at 92% 8%, #e8b59a 0%, rgba(248,243,236,0) 55%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mark}
          width={120}
          height={120}
          alt=""
          style={{ borderRadius: 27 }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 110,
              fontWeight: 700,
              color: "#2d2823",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 44, color: "#8f4a32", marginTop: 26 }}>
            {subtitle}
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#756b5f" }}>{footer}</div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
