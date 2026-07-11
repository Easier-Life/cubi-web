"use client";

import { useEffect, useRef, useState } from "react";
import { copyToClipboard } from "@/lib/clipboard";

interface CodeCardProps {
  displayCode: string;
  rawCode: string;
  label: string;
  copyLabel: string;
  copiedLabel: string;
  autoCopiedNote: string;
  codeAria: string;
}

type CopyState = "idle" | "auto" | "copied";

export function CodeCard({
  displayCode,
  rawCode,
  label,
  copyLabel,
  copiedLabel,
  autoCopiedNote,
  codeAria,
}: CodeCardProps) {
  const [state, setState] = useState<CopyState>("idle");
  // Whether the silent on-load copy landed — the state a manual "copied"
  // flash falls back to, so the reassurance note doesn't vanish after a tap.
  const autoCopiedRef = useRef(false);

  useEffect(() => {
    // Only a real 7-char code is worth putting on the clipboard; never
    // clobber it with URL garbage. iOS Safari rejects writes outside a user
    // gesture — then we just stay quiet and the button does the job.
    if (rawCode.length !== 7) return;
    void copyToClipboard(rawCode).then((ok) => {
      if (!ok) return;
      autoCopiedRef.current = true;
      setState((prev) => (prev === "idle" ? "auto" : prev));
    });
  }, [rawCode]);

  function handleCopy() {
    void copyToClipboard(rawCode).then((ok) => {
      if (!ok) return; /* user can still select the code manually */
      autoCopiedRef.current = true;
      setState("copied");
      window.setTimeout(() => {
        setState(autoCopiedRef.current ? "auto" : "idle");
      }, 2200);
    });
  }

  return (
    // The whole card is one big tap-to-copy target (elderly-friendly); the
    // button inside stays as the visible, keyboard-reachable control — its
    // clicks bubble up here, so the handler lives on the section only.
    <section
      onClick={handleCopy}
      className="cursor-pointer rounded-lg border border-cream-300 bg-cream-50 px-6 py-8 shadow-[var(--shadow-md)]"
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
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-terracotta-500 px-5 py-3 text-[15px] font-semibold text-cream-100 transition-colors duration-150 hover:bg-terracotta-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 active:bg-terracotta-700"
        aria-live="polite"
      >
        {state === "copied" ? copiedLabel : copyLabel}
      </button>

      {state === "auto" && (
        <p
          aria-live="polite"
          className="mt-3 text-center text-[14px] leading-[1.55] text-ink-500"
        >
          {autoCopiedNote}
        </p>
      )}
    </section>
  );
}
