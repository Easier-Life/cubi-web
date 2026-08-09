import { type Localized, type Locale, t } from "@/lib/i18n";

export function Faq({
  items,
  locale,
}: {
  items: { q: Localized; a: Localized }[];
  locale: Locale;
}) {
  return (
    <div className="divide-y divide-divider overflow-hidden rounded-xl border border-cream-300 bg-cream-50/70">
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-[16px] font-semibold text-ink-900 transition-colors hover:bg-cream-100/60 sm:px-6 [&::-webkit-details-marker]:hidden">
            <span>{t(item.q, locale)}</span>
            <span
              aria-hidden="true"
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-cream-300 text-ink-500 transition-transform duration-300 ease-[var(--ease-cubi)] group-open:rotate-45 group-open:border-terracotta-200 group-open:text-terracotta-700"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="px-5 pb-6 text-[15px] leading-[1.7] text-ink-700 sm:px-6">
            {t(item.a, locale)}
          </p>
        </details>
      ))}
    </div>
  );
}
