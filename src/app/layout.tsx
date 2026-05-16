import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cubi — Nhật ký bé cho cả nhà",
    template: "%s · Cubi",
  },
  description:
    "Cubi giữ những khoảnh khắc nhỏ của bé cho ông bà, bố mẹ cùng xem nhé.",
  metadataBase: new URL("https://cubi.family"),
  applicationName: "Cubi",
  openGraph: {
    type: "website",
    siteName: "Cubi",
    locale: "vi_VN",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f3ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body className="bg-cream-100 text-ink-900 antialiased">{children}</body>
    </html>
  );
}
