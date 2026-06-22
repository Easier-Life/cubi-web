import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { appStoreUrl, hasAppStore, hasPlayStore, siteConfig } from "@/lib/site";

export type Platform = "ios" | "android" | "other";

/**
 * Best-effort mobile OS detection from the user agent. Returns "other" when
 * called on the server (no `navigator`) so it's safe to import anywhere; only
 * call it on the client for a real answer.
 */
export function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return "android";
  // iPadOS 13+ reports itself as desktop Safari ("MacIntel"); the touch
  // points are what give an actual iPad away.
  const iPadOS =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  if (/iphone|ipad|ipod/i.test(ua) || iPadOS) return "ios";
  return "other";
}

/**
 * The visitor's mobile platform, resolved after mount. Renders as "other"
 * during SSR and first paint so server and client markup match, then updates
 * once we can read the user agent.
 */
export function useDevicePlatform(): Platform {
  const [platform, setPlatform] = useState<Platform>("other");
  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);
  return platform;
}

/**
 * Where the primary "download" action should go for a given platform:
 * straight to the visitor's own store on mobile, or `fallback` (e.g. the
 * on-page download section showing both stores) on desktop/unknown.
 */
export function downloadHref(
  platform: Platform,
  locale: Locale,
  fallback: string,
): string {
  if (platform === "ios" && hasAppStore()) return appStoreUrl(locale);
  if (platform === "android" && hasPlayStore()) return siteConfig.store.playStore;
  return fallback;
}
