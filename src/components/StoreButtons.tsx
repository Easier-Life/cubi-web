"use client";

import { t, type Locale } from "@/lib/i18n";
import { appStoreUrl, hasAppStore, hasPlayStore, siteConfig } from "@/lib/site";
import { useDevicePlatform, type Platform } from "@/lib/platform";
import { copyToClipboard } from "@/lib/clipboard";
import { ui } from "@/content/ui";
import { CubiMark } from "./CubiMark";

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
      <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.1-2.02-3.78-2.04-1.6-.16-3.13.94-3.94.94-.81 0-1.72-.92-2.83-.9-1.46.02-2.8.85-3.55 2.16-1.51 2.62-.39 6.5 1.08 8.63.72 1.04 1.58 2.21 2.71 2.17 1.09-.04 1.5-.7 2.82-.7 1.31 0 1.69.7 2.83.68 1.17-.02 1.91-1.06 2.63-2.11.83-1.21 1.17-2.38 1.19-2.44-.03-.01-2.28-.87-2.31-3.45zM14.6 4.6c.6-.73 1-1.74.89-2.76-.86.03-1.9.57-2.52 1.3-.55.64-1.04 1.67-.91 2.65.96.07 1.94-.49 2.54-1.19z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="M3.6 1.8c-.25.2-.4.55-.4 1.02v18.36c0 .47.15.82.42 1.02L13.8 12 3.6 1.8z" fill="#00D3FF" />
      <path d="M17.2 15.4 13.8 12l3.4-3.45 4.05 2.3c1.16.66 1.16 1.74 0 2.42l-4.05 2.13z" fill="#FFCE00" />
      <path d="M17.3 15.35 13.8 12 3.62 22.2c.38.31.97.34 1.65-.04l12.03-6.81z" fill="#FF3A44" />
      <path d="M17.3 8.65 5.27 1.84C4.6 1.46 4 1.49 3.62 1.8L13.8 12l3.5-3.35z" fill="#00F076" />
    </svg>
  );
}

function Badge({
  href,
  glyph,
  small,
  big,
  onClick,
}: {
  href: string;
  glyph: React.ReactNode;
  small: string;
  big: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="inline-flex min-h-[52px] items-center gap-3 rounded-lg bg-ink-900 px-4 py-2.5 text-cream-50 transition-transform duration-200 ease-[var(--ease-cubi)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
    >
      <span className="text-cream-50">{glyph}</span>
      {/* Explicit color: the global unlayered `a { color: inherit }` rule
          outranks the anchor's own text utility (Tailwind v4 layers), which
          is what made the big store-name line render dark-on-dark. */}
      <span className="flex flex-col leading-tight text-cream-50">
        <span className="text-[10px] tracking-wide text-cream-50/80">{small}</span>
        <span className="text-[16px] font-semibold">{big}</span>
      </span>
    </a>
  );
}

function ComingSoonBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex min-h-[52px] items-center gap-3 rounded-lg border border-terracotta-100 bg-terracotta-50/70 px-4 py-2.5 text-terracotta-700">
      <CubiMark size={26} />
      <span className="text-[14px] font-semibold">{label}</span>
    </span>
  );
}

export function StoreButtons({
  locale,
  className = "",
  initialPlatform,
  copyText,
}: {
  locale: Locale;
  className?: string;
  /**
   * Server-detected platform for dynamic pages (invite): SSR then emits only
   * the visitor's own badge, no post-hydration pop. Static pages omit it and
   * keep the render-both-then-refine behavior.
   */
  initialPlatform?: Platform;
  /** When set, a badge tap also writes this to the clipboard (gesture-copy). */
  copyText?: string;
}) {
  const platform = useDevicePlatform(initialPlatform);
  const small = t(ui.store.downloadOn, locale);
  // Fire-and-forget: the user is leaving for the store, no feedback to give.
  const copyOnTap = copyText
    ? () => {
        void copyToClipboard(copyText);
      }
    : undefined;

  const apple = hasAppStore() ? (
    <Badge
      key="ios"
      href={appStoreUrl(locale)}
      glyph={<AppleGlyph />}
      small={small}
      big={t(ui.store.iphone, locale)}
      onClick={copyOnTap}
    />
  ) : (
    <ComingSoonBadge key="ios" label={t(ui.store.comingSoonIphone, locale)} />
  );

  const play = hasPlayStore() ? (
    <Badge
      key="android"
      href={siteConfig.store.playStore}
      glyph={<PlayGlyph />}
      small={small}
      big={t(ui.store.android, locale)}
      onClick={copyOnTap}
    />
  ) : null;

  // Show only the visitor's own badge on a phone — one obvious button beats a
  // choice; desktop/unknown keeps both so the visitor can still pick.
  const badges = [
    platform !== "android" ? apple : null,
    platform !== "ios" ? play : null,
  ];

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {badges}
    </div>
  );
}
