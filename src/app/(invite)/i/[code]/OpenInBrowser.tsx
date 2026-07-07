"use client";

import { useEffect, useState } from "react";

interface OpenInBrowserProps {
  prompt: string;
  action: string;
  hintBefore: string;
  hintAfter: string;
}

export function OpenInBrowser({
  prompt,
  action,
  hintBefore,
  hintAfter,
}: OpenInBrowserProps) {
  const [href, setHref] = useState<string>("");

  useEffect(() => {
    setHref(window.location.href);
  }, []);

  return (
    <div className="mt-8 rounded-md border border-cream-300 bg-cream-50 px-5 py-4 text-center">
      <p className="text-[13px] leading-[1.55] text-ink-500">{prompt}</p>
      <a
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block rounded-md border border-cream-300 bg-cream-100 px-5 py-2.5 text-[14px] font-semibold text-ink-700 transition-colors duration-150 hover:border-terracotta-500 hover:text-terracotta-700"
      >
        {action}
      </a>
      <p className="mt-3 text-[12px] leading-[1.5] text-ink-300">
        {hintBefore}
        <span className="font-semibold text-ink-500">⋯</span>
        {hintAfter}
      </p>
    </div>
  );
}
