import type { Metadata } from "next";
import { headers } from "next/headers";
import { CubiMark } from "@/components/CubiMark";
import { StoreButtons } from "@/components/StoreButtons";
import { isLocale, ogLocale, type Locale } from "@/lib/i18n";
import { platformFromUserAgent } from "@/lib/platform-detect";
import { siteConfig } from "@/lib/site";
import {
  inviteCodeAria,
  inviteCopy,
  inviteMetaDescription,
  inviteMetaTitle,
} from "@/content/invite";
import { CodeCard } from "./CodeCard";
import { OpenAppSection } from "./OpenAppSection";
import { OpenInBrowser } from "./OpenInBrowser";

// The invite link carries the sharer's language as `?l=` (see the app's
// invite share), so the page and its preview card render dynamically per link.
type RouteParams = { code: string };
type SearchParams = { l?: string };

function normalizeCode(raw: string): string {
  return raw.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function formatCode(raw: string): string {
  const cleaned = normalizeCode(raw);
  if (cleaned.length === 7) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  }
  return cleaned || raw.toUpperCase();
}

/**
 * The language the invite was shared in. The app always stamps `?l=` on the
 * link (vi or en); a bare link (older links, or typed by hand) has no reliable
 * signal — a scraper's Accept-Language is its own, not the recipient's — so we
 * fall back to English, consistent with the rest of the site.
 */
function resolveLocale(search: SearchParams): Locale {
  const raw = search.l?.toLowerCase();
  return raw && isLocale(raw) ? raw : "en";
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<RouteParams>;
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const [{ code }, search] = await Promise.all([params, searchParams]);
  const locale = resolveLocale(search);
  const formatted = formatCode(code);
  const title = inviteMetaTitle(formatted, locale);
  const description = inviteMetaDescription(locale);

  // One shared static card per language, served straight from public/ — a
  // real .png URL (Zalo's scraper rejects extension-less image URLs) that is
  // small, warm on the CDN, and never cold-renders. Authoring source lives in
  // /i/preview/[lang]; see that route for how to regenerate these files.
  const image = {
    url: `${siteConfig.url}/og/invite-${locale}.png`,
    width: 1200,
    height: 630,
    alt:
      locale === "vi"
        ? "Bạn được mời xem nhật ký của một em bé trên Cubi"
        : "You're invited to a baby's diary on Cubi",
  };

  return {
    title,
    description,
    openGraph: {
      type: "website",
      siteName: "Cubi",
      locale: ogLocale[locale],
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function InviteLandingPage({
  params,
  searchParams,
}: {
  params: Promise<RouteParams>;
  searchParams: Promise<SearchParams>;
}) {
  const [{ code }, search, headerList] = await Promise.all([
    params,
    searchParams,
    headers(),
  ]);
  const locale = resolveLocale(search);
  const copy = inviteCopy(locale);
  const formatted = formatCode(code);
  const rawCode = normalizeCode(code);
  // Server-side UA sniff so a phone's very first HTML already carries only
  // its own store badge / open-app variant (the page is dynamic anyway).
  const initialPlatform = platformFromUserAgent(headerList.get("user-agent"));
  // Only a real 7-char code goes near the visitor's clipboard.
  const clipboardCode = rawCode.length === 7 ? rawCode : undefined;

  return (
    <main className="min-h-svh px-5 pb-16 pt-12 sm:pt-20">
      {/* The layout can't read `?l=`, so its lang="vi" is only a no-JS
          default; correct it before paint for English invites. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(locale)};`,
        }}
      />
      <div className="mx-auto max-w-md">
        <header className="mb-9 text-center">
          <CubiMark size={48} className="mx-auto" title="Cubi" />
          <p className="eyebrow mt-5 text-ink-500">{copy.eyebrow}</p>
          <h1 className="mt-3 text-[28px] font-semibold leading-[1.2] text-ink-900 sm:text-[30px]">
            {copy.heading}
          </h1>
          <p className="mt-4 text-[16px] leading-[1.6] text-ink-500">
            {copy.intro}
          </p>
        </header>

        <CodeCard
          displayCode={formatted}
          rawCode={rawCode}
          label={copy.codeLabel}
          copyLabel={copy.copy}
          copiedLabel={copy.copied}
          autoCopiedNote={copy.autoCopied}
          codeAria={inviteCodeAria(formatted, locale)}
        />

        <section className="mt-10">
          <h2 className="text-center text-[19px] font-semibold leading-[1.3] text-ink-900">
            {copy.installTitle}
          </h2>
          <ol className="mt-5 space-y-5">
            <li className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta-500 text-[14px] font-semibold text-cream-50"
              >
                1
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[16px] leading-[1.65] text-ink-700">
                  {copy.installStep1}
                </p>
                <StoreButtons
                  locale={locale}
                  initialPlatform={initialPlatform}
                  copyText={clipboardCode}
                  className="mt-3"
                />
              </div>
            </li>
            <li className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta-500 text-[14px] font-semibold text-cream-50"
              >
                2
              </span>
              <p className="min-w-0 flex-1 text-[16px] leading-[1.65] text-ink-700">
                {copy.installStep2}
              </p>
            </li>
          </ol>
          <p className="mt-5 text-center text-[15px] leading-[1.6] text-ink-500">
            {copy.manualHintBefore}
            <strong className="whitespace-nowrap font-mono font-semibold text-ink-900">
              {formatted}
            </strong>
            {copy.manualHintAfter}
          </p>
        </section>

        <OpenAppSection
          rawCode={rawCode}
          initialPlatform={initialPlatform}
          title={copy.openTitle}
          action={copy.openAction}
          hint={copy.openHint}
          failedHint={copy.openFailed}
          desktopHint={copy.desktopHint}
        />

        <OpenInBrowser
          prompt={copy.browserPrompt}
          action={copy.browserAction}
          hintBefore={copy.browserHintBefore}
          hintAfter={copy.browserHintAfter}
        />

        <footer className="mt-16 border-t border-divider pt-6 text-center text-[12px] leading-[1.5] text-ink-300">
          {copy.footer}
        </footer>
      </div>
    </main>
  );
}
