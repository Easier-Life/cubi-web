import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../../globals.css";
import { fontVariables } from "@/lib/fonts";
import {
  htmlLang,
  isLocale,
  locales,
  type Locale,
  ogLocale,
  t,
} from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { organizationLd, websiteLd } from "@/lib/seo";
import { siteContent } from "@/content/site-content";
import { ui } from "@/content/ui";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { ScrollReveal } from "@/components/ScrollReveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#f8f3ec",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "vi";
  const m = siteContent.marketing;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `Cubi — ${t(m.hero.eyebrow, locale)}`,
      template: "%s · Cubi",
    },
    description: t(m.hero.sub, locale),
    applicationName: "Cubi",
    authors: [{ name: "Cubi" }],
    creator: "Cubi",
    publisher: "Cubi",
    manifest: `/manifest-${locale}.webmanifest`,
    formatDetection: { telephone: false },
    appleWebApp: { capable: true, title: "Cubi", statusBarStyle: "default" },
    openGraph: {
      type: "website",
      siteName: "Cubi",
      locale: ogLocale[locale],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang;

  return (
    <html lang={htmlLang[locale]} className={fontVariables} suppressHydrationWarning>
      <head>
        {/*
          Pre-paint: arm the scroll reveal, and disarm it 2.5s later no matter
          what. Content ships visible, so a page whose bundle never loads reads
          normally instead of stranding sections at opacity 0 (the 4a678f5 bug).
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return}catch(e){}d.classList.add('reveal-ready');setTimeout(function(){if(!window.__cubiRevealAlive)d.classList.remove('reveal-ready')},2500)})()",
          }}
        />
      </head>
      <body className="bg-cream-100 text-ink-900 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-cream-50"
        >
          {t(ui.skipToContent, locale)}
        </a>

        <div className="relative z-10 flex min-h-svh flex-col">
          <SiteHeader locale={locale} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter locale={locale} />
        </div>
        <ScrollReveal />

        <JsonLd data={[organizationLd(locale), websiteLd()]} />
      </body>
    </html>
  );
}
