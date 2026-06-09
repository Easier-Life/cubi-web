"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, localeShort, otherLocale } from "@/lib/i18n";

function swapLocale(pathname: string, current: Locale): string {
  const parts = pathname.split("/");
  // parts[0] === "" ; parts[1] === current locale
  if (parts.length > 1) parts[1] = otherLocale(current);
  const next = parts.join("/");
  return next || `/${otherLocale(current)}`;
}

export function LanguageSwitcher({
  locale,
  ariaLabel,
  className = "",
}: {
  locale: Locale;
  ariaLabel: string;
  className?: string;
}) {
  const pathname = usePathname() || `/${locale}`;
  const target = swapLocale(pathname, locale);
  const next = otherLocale(locale);

  return (
    <Link
      href={target}
      hrefLang={next}
      aria-label={`${localeShort[locale]}/${localeShort[next]} — ${ariaLabel}`}
      className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-pill border border-cream-300 bg-cream-50/80 px-3.5 py-2 text-[13px] font-semibold text-ink-700 transition-colors duration-200 ease-[var(--ease-cubi)] hover:border-terracotta-200 hover:text-terracotta-700 ${className}`}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3.5 12h17M12 3c2.5 2.4 3.8 5.6 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3Z" />
      </svg>
      <span className="text-ink-300">{localeShort[locale]}</span>
      <span aria-hidden="true" className="text-ink-300">
        /
      </span>
      <span>{localeShort[next]}</span>
    </Link>
  );
}
