import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200 ease-[var(--ease-cubi)] focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-terracotta-500 text-cream-50 hover:bg-terracotta-700 active:bg-terracotta-700 shadow-[var(--shadow-sm)]",
  secondary:
    "bg-cream-200 text-ink-700 border border-cream-300 hover:border-terracotta-200 hover:text-terracotta-700",
  ghost: "text-ink-700 hover:text-terracotta-700",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-7 py-3.5 text-[16px]",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external,
  disabled,
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (disabled || !href) {
    return (
      <span
        className={`${cls} opacity-60`}
        aria-disabled="true"
        aria-label={ariaLabel}
      >
        {children}
      </span>
    );
  }

  const isExternal = external ?? /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
