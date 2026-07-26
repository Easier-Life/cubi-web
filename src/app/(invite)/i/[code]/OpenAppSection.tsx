"use client";

import { useEffect, useRef, useState } from "react";
import { useDevicePlatform, type Platform } from "@/lib/platform";
import { copyToClipboard } from "@/lib/clipboard";
import { siteConfig } from "@/lib/site";

interface OpenAppSectionProps {
  rawCode: string;
  initialPlatform: Platform;
  title: string;
  action: string;
  hint: string;
  failedHint: string;
  desktopHint: string;
}

const buttonClass =
  "mt-4 flex w-full items-center justify-center rounded-md bg-terracotta-600 px-5 py-3.5 text-[16px] font-semibold text-cream-100 transition-colors duration-150 hover:bg-terracotta-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 active:bg-terracotta-700";

/**
 * "Already have the app?" — the path for someone who landed here with Cubi
 * installed (typically a chat-app webview that swallowed the universal link).
 * Opens the app's claim screen with the code pre-filled via the custom scheme
 * (`cubi://i/{code}`); on Android through an `intent://` URL so a missing app
 * falls through to the Play listing instead of a dead tap.
 */
export function OpenAppSection({
  rawCode,
  initialPlatform,
  title,
  action,
  hint,
  failedHint,
  desktopHint,
}: OpenAppSectionProps) {
  const platform = useDevicePlatform(initialPlatform);
  const [failed, setFailed] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // Leaving the page means the app (or a store) actually opened — the
    // "not installed?" hint would be wrong, so cancel it.
    function cancel() {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }
    document.addEventListener("visibilitychange", cancel);
    window.addEventListener("pagehide", cancel);
    return () => {
      cancel();
      document.removeEventListener("visibilitychange", cancel);
      window.removeEventListener("pagehide", cancel);
    };
  }, []);

  function handleOpenTap() {
    // Gesture-driven copy always passes the clipboard policy — whatever
    // happens next, the code is ready to paste inside the app.
    if (rawCode.length === 7) void copyToClipboard(rawCode);
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      if (!document.hidden) setFailed(true);
    }, 1600);
  }

  return (
    <section className="mt-10 rounded-lg border border-cream-300 bg-cream-50/60 px-6 py-6 text-center">
      <h2 className="text-[19px] font-semibold leading-[1.3] text-ink-900">
        {title}
      </h2>

      {platform === "other" ? (
        <p className="mt-3 text-[15px] leading-[1.65] text-ink-700">
          {desktopHint}
        </p>
      ) : (
        <>
          <p className="mt-2 text-[15px] leading-[1.6] text-ink-500">{hint}</p>
          {platform === "android" ? (
            <a
              href={
                `intent://i/${rawCode}#Intent;scheme=cubi;` +
                `package=${siteConfig.bundleId};` +
                `S.browser_fallback_url=${encodeURIComponent(siteConfig.store.playStore)};end`
              }
              onClick={handleOpenTap}
              className={buttonClass}
            >
              {action}
            </a>
          ) : (
            <button
              type="button"
              onClick={() => {
                handleOpenTap();
                window.location.href = `cubi://i/${rawCode}`;
              }}
              className={buttonClass}
            >
              {action}
            </button>
          )}
          {failed && (
            <p
              aria-live="polite"
              className="mt-3 text-[15px] leading-[1.6] text-terracotta-700"
            >
              {failedHint}
            </p>
          )}
        </>
      )}
    </section>
  );
}
