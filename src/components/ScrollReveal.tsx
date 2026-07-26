"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Very restrained scroll reveal: a 12px rise and a fade, once per element.
 *
 * Failure-safe by construction, because an earlier version of this shipped a
 * bug where sections stayed invisible forever (commit 4a678f5):
 *
 *  1. Nothing is hidden in the server HTML. `.reveal` only becomes invisible
 *     once the pre-paint script in the layout adds `reveal-ready` to <html>,
 *     so if the bundle never loads the page still reads normally.
 *  2. That same inline script removes `reveal-ready` after 2.5s, so even a
 *     dead React bundle un-hides everything.
 *  3. The observer re-runs on pathname change — a client-side <Link> nav keeps
 *     the layout mounted, which is exactly what stranded sections last time.
 *  4. prefers-reduced-motion is honoured in CSS, and here we simply reveal
 *     everything immediately.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    // Tell the pre-paint failsafe that React is alive, so its 2.5s timer does
    // not disarm the reveal for sections the visitor has not scrolled to yet.
    (window as unknown as { __cubiRevealAlive?: boolean }).__cubiRevealAlive = true;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (nodes.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      root.classList.remove("reveal-ready");
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
    );

    for (const node of nodes) {
      // Anything already on screen (or already revealed) shows with no delay.
      if (node.classList.contains("is-in")) continue;
      const box = node.getBoundingClientRect();
      if (box.top < window.innerHeight && box.bottom > 0) node.classList.add("is-in");
      else observer.observe(node);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
