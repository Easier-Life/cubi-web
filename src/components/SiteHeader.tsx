"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { type Locale, t } from "@/lib/i18n";
import { downloadHref, useDevicePlatform } from "@/lib/platform";
import { ui } from "@/content/ui";
import { Wordmark } from "./Wordmark";
import { Button } from "./Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const platform = useDevicePlatform();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const home = `/${locale}`;
  // Anchors point at the home page's sections; Guides is a real page, so it
  // must be an absolute path or it breaks when read from /vi/privacy etc.
  const navItems = [
    { href: `${home}#features`, label: ui.nav.features },
    { href: `${home}#how`, label: ui.nav.how },
    { href: `${home}#faq`, label: ui.nav.faq },
    { href: `${home}/guides`, label: ui.nav.guides },
  ];
  // On a phone, the download CTA goes straight to the visitor's store; on
  // desktop/unknown it scrolls to the on-page section with both stores.
  const getCubiHref = downloadHref(platform, locale, `${home}#download`);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ease-[var(--ease-cubi)] ${
        scrolled
          ? "border-b border-cream-300/80 bg-cream-100/85 backdrop-blur-md"
          : "border-b border-transparent bg-cream-100/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Wordmark locale={locale} />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-[14px] font-medium text-ink-700 transition-colors duration-200 hover:text-terracotta-700"
            >
              {t(item.label, locale)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher locale={locale} ariaLabel={t(ui.switchLanguage, locale)} />
          <Button href={getCubiHref} variant="primary" size="md">
            {t(ui.nav.download, locale)}
          </Button>
        </div>

        <div className="flex items-center gap-1.5 md:hidden">
          <Button
            href={getCubiHref}
            variant="primary"
            size="md"
            className="!min-h-11 !px-3 !py-2 !text-[13px]"
          >
            {t(ui.nav.download, locale)}
          </Button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md text-ink-700"
            aria-expanded={open}
            aria-label={t(open ? ui.close : ui.menu, locale)}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open ? (
        <div className="border-t border-cream-300/80 bg-cream-100/95 backdrop-blur-md md:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4"
            aria-label="Mobile"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-[16px] font-medium text-ink-700 hover:bg-cream-200"
              >
                {t(item.label, locale)}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3">
              <LanguageSwitcher
                locale={locale}
                ariaLabel={t(ui.switchLanguage, locale)}
              />
              <Button
                href={getCubiHref}
                variant="primary"
                size="md"
                className="flex-1"
                onClick={() => setOpen(false)}
              >
                {t(ui.nav.download, locale)}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
