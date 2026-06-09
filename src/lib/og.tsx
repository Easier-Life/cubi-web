import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 48 48" fill="none"><path d="M24 2C9.6 2 2 9.6 2 24s7.6 22 22 22 22-7.6 22-22S38.4 2 24 2Z" fill="#FBF7F1"/><path d="M24 2C9.6 2 2 9.6 2 24s7.6 22 22 22 22-7.6 22-22S38.4 2 24 2Z" stroke="#E5DDD0" stroke-width="1.5"/><path d="M24 36c0-6-.4-10.5-1-13.6" stroke="#5A6E5A" stroke-width="2.6" stroke-linecap="round"/><path d="M22.6 24c-2-4.4-6-6.2-9.4-6 .2 3.8 2.6 7.6 6.8 8.4 1.2.2 2-.6 2.6-2.4Z" fill="#A4B0A1"/><path d="M24.6 21c1.4-4.6 5.2-7 8.8-7.2.4 3.8-1.4 8-5.4 9.4-1.2.4-2.6-.4-3.4-2.2Z" fill="#C5704F"/></svg>`;
const MARK_DATA = `data:image/svg+xml,${encodeURIComponent(MARK_SVG)}`;

/**
 * Brand Open Graph card. Latin-only text so it renders reliably with the
 * default font (no font fetch at build), and reads as the same warm card
 * across both locales and the invite pages.
 */
export function renderOgImage({
  title = "Cubi",
  subtitle = "Tiny moments, kept forever.",
  footer = "cubi.family · A private baby diary for the whole family",
}: {
  title?: string;
  subtitle?: string;
  footer?: string;
} = {}) {
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
        <img src={MARK_DATA} width={120} height={120} alt="" />
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
