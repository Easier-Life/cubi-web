"use client";

import { useEffect } from "react";

/**
 * Quiet scroll reveal. The `js` class is added synchronously in the layout
 * <head> (before paint) so no-JS visitors and crawlers always see content,
 * while JS visitors get the fade-in. Honors prefers-reduced-motion.
 */
export function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not([data-revealed])"),
    );

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
  }, []);

  return null;
}
