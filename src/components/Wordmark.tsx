import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { CubiMark } from "./CubiMark";

export function Wordmark({
  locale,
  withMark = true,
  className = "",
  size = "md",
}: {
  locale: Locale;
  withMark?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const textSize =
    size === "lg" ? "text-[26px]" : size === "sm" ? "text-[18px]" : "text-[21px]";
  const markSize = size === "lg" ? 34 : size === "sm" ? 24 : 28;

  return (
    <Link
      href={`/${locale}`}
      className={`group inline-flex min-h-11 items-center gap-2.5 ${className}`}
      aria-label="Cubi"
    >
      {withMark ? (
        <CubiMark
          size={markSize}
          className="transition-transform duration-200 ease-[var(--ease-cubi)] group-hover:-rotate-3"
        />
      ) : null}
      <span className={`wordmark ${textSize} leading-none text-ink-900`}>
        Cubi
      </span>
    </Link>
  );
}
