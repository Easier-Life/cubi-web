import type { Metadata, Viewport } from "next";
import "../globals.css";
import { fontVariables } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#f8f3ec",
  width: "device-width",
  initialScale: 1,
};

export default function InviteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={fontVariables} suppressHydrationWarning>
      <body className="bg-cream-100 text-ink-900 antialiased">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
