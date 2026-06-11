/**
 * Cubi logomark — the real app icon (terracotta crescent moon cradling a
 * daisy), so the mark on the web is pixel-identical to the icon on the
 * phone. Served from /app-icon-192.png (512px master in /app-icon-512.png).
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
      src="/app-icon-192.png"
      width={size}
      height={size}
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
      className={`select-none rounded-[22.5%] ring-1 ring-ink-900/[0.06] ${className}`}
      draggable={false}
    />
  );
}
