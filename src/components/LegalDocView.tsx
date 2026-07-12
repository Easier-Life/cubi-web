import Link from "next/link";
import { type Locale, t } from "@/lib/i18n";
import type { LegalDoc } from "@/content/types";
import { ui } from "@/content/ui";
import { MarkdownLite } from "./MarkdownLite";

export function LegalDocView({
  doc,
  locale,
  lastUpdated,
}: {
  doc: LegalDoc;
  locale: Locale;
  lastUpdated?: string;
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <Link
        href={`/${locale}`}
        className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-500 transition-colors hover:text-terracotta-700"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        {t(ui.backHome, locale)}
      </Link>

      <header className="mt-7 border-b border-divider pb-7">
        <h1 className="font-display text-[32px] font-semibold leading-[1.15] text-ink-900 sm:text-[40px]">
          {t(doc.title, locale)}
        </h1>
        {lastUpdated ? (
          <p className="eyebrow mt-4 text-ink-500">
            {t(ui.lastUpdated, locale)}: {lastUpdated}
          </p>
        ) : null}
      </header>

      <div className="mt-7 rounded-xl border border-cream-300 bg-cream-50/70 p-5 text-[15px] leading-[1.7] text-ink-700 sm:p-6">
        <MarkdownLite text={t(doc.intro, locale)} />
      </div>

      <div className="mt-10 space-y-9">
        {doc.sections.map((section, i) => (
          <section key={i} className="scroll-mt-24">
            <h2 className="font-display text-[20px] font-semibold leading-[1.25] text-ink-900 sm:text-[23px]">
              {t(section.heading, locale)}
            </h2>
            <div className="mt-3">
              <MarkdownLite text={t(section.body, locale)} />
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
