"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Quiet scroll reveal. The `js` class is added synchronously in the layout
 * <head> (before paint) so no-JS visitors and crawlers always see content,
 * while JS visitors get the fade-in. Honors prefers-reduced-motion.
 *
 * Re-runs on every route change: with App Router client-side navigation the
 * layout (and this component) stay mounted, so a once-only effect would leave
 * the new page's .reveal elements unobserved — and invisible — forever.
 * A pure-JS failsafe in the layout inline script covers the case where this
 * bundle never loads at all.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not([data-revealed])"),
    );
    if (els.length === 0) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => (el.dataset.revealed = "true"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "true";
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => io.observe(el));

    // Safety net: never leave content hidden (covers no-scroll captures,
    // print/preview renderers, and any observer hiccup).
    const fallback = window.setTimeout(() => {
      els.forEach((el) => (el.dataset.revealed = "true"));
    }, 1600);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
