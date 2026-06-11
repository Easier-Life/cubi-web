/**
 * Cubi logomark — the real app icon (terracotta crescent moon cradling a
 * daisy), so the mark on the web is pixel-identical to the icon on the
 * phone. /app-icon-128.png (~22 KB) covers the largest render (34px) at 3×
 * DPR; the 512px master lives in /app-icon-512.png for manifest/OG/JSON-LD.
 */
export function CubiMark({
  size = 32,
  className = "",
  title,
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/app-icon-128.png"
      width={size}
      height={size}
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
      className={`select-none rounded-[22.5%] ring-1 ring-ink-900/[0.06] ${className}`}
      draggable={false}
    />
  );
}
