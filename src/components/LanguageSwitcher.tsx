"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  isLocale,
  locales,
  localeNames,
  localeShort,
  type Locale,
} from "@/lib/i18n";

/**
 * Swap the locale segment of the current path.
 *
 * Guides have translated slugs, so a language swap from a guide page would land
 * on a slug that does not exist in the target language. Those pages send the
 * visitor to the guides index of the target language instead of a 404.
 */
function swapLocale(pathname: string, next: Locale): string {
  const parts = pathname.split("/");
  if (!isLocale(parts[1] ?? "")) return `/${next}`;
  parts[1] = next;
  if (parts[2] === "guides" && parts.length > 3) return `/${next}/guides`;
  return parts.join("/") || `/${next}`;
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
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={root} className={`relative ${className}`}>
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-[44px] items-center gap-1.5 rounded-pill border border-cream-300 bg-cream-50/80 px-3.5 py-2 text-[13px] font-semibold text-ink-700 transition-colors duration-200 ease-[var(--ease-cubi)] hover:border-terracotta-200 hover:text-terracotta-700"
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
        <span>{localeShort[locale]}</span>
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`text-ink-300 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label={ariaLabel}
          className="absolute right-0 z-50 mt-2 min-w-[168px] overflow-hidden rounded-xl border border-cream-300 bg-cream-50 py-1 shadow-[var(--shadow-lg)]"
        >
          {locales.map((l) => {
            const current = l === locale;
            return (
              <Link
                key={l}
                role="menuitem"
                href={swapLocale(pathname, l)}
                hrefLang={l}
                aria-current={current ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between gap-3 px-4 py-2.5 text-[14px] transition-colors hover:bg-cream-200 ${
                  current
                    ? "font-semibold text-terracotta-700"
                    : "font-medium text-ink-700"
                }`}
              >
                {localeNames[l]}
                <span className="text-[12px] text-ink-300">
                  {localeShort[l]}
                </span>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
