"use client";

import { useState } from "react";

interface CodeCardProps {
  displayCode: string;
  rawCode: string;
  label: string;
  copyLabel: string;
  copiedLabel: string;
  codeAria: string;
}

export function CodeCard({
  displayCode,
  rawCode,
  label,
  copyLabel,
  copiedLabel,
  codeAria,
}: CodeCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(rawCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* user can still select the code manually */
    }
  }

  return (
    <section
      className="rounded-lg border border-cream-300 bg-cream-50 px-6 py-8 shadow-[var(--shadow-md)]"
      aria-labelledby="invite-code-label"
    >
      <p
        id="invite-code-label"
        className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500"
      >
        {label}
      </p>

      <p
        className="mt-4 select-all text-center font-mono text-[44px] font-semibold leading-[1.1] tracking-[0.06em] text-ink-900 tabular-nums sm:text-[52px]"
        aria-label={codeAria}
      >
        {displayCode}
      </p>

      <button
        type="button"
        onClick={handleCopy}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-terracotta-500 px-5 py-3 text-[15px] font-semibold text-cream-100 transition-colors duration-150 hover:bg-terracotta-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 active:bg-terracotta-700"
        aria-live="polite"
      >
        {copied ? copiedLabel : copyLabel}
      </button>
    </section>
  );
}
