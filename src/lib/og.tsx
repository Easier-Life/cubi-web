import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/** The real app icon (crescent moon + daisy), identical to the phone icon. */
async function markDataUri(): Promise<string> {
  const png = await readFile(
    join(process.cwd(), "public", "app-icon-192.png"),
  );
  return `data:image/png;base64,${png.toString("base64")}`;
}

/**
 * Brand Open Graph card. Latin-only text so it renders reliably with the
 * default font (no font fetch at build), and reads as the same warm card
 * across both locales and the invite pages.
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
  const mark = await markDataUri();
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
    OG_SIZE,
  );
}
