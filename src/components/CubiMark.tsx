/**
 * Cubi logomark — a small sprout on a warm squircle tile.
 * Evokes a growing little one. MUJI-minimal, hand-feel curves.
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
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      {/* squircle tile */}
      <path
        d="M24 2C9.6 2 2 9.6 2 24s7.6 22 22 22 22-7.6 22-22S38.4 2 24 2Z"
        fill="#F5E4C0"
      />
      <path
        d="M24 2C9.6 2 2 9.6 2 24s7.6 22 22 22 22-7.6 22-22S38.4 2 24 2Z"
        stroke="#E5DDD0"
        strokeWidth="1.5"
      />
      {/* stem */}
      <path
        d="M24 36c0-6-.4-10.5-1-13.6"
        stroke="#5A6E5A"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* left leaf — sage */}
      <path
        d="M22.6 24c-2-4.4-6-6.2-9.4-6 .2 3.8 2.6 7.6 6.8 8.4 1.2.2 2-.6 2.6-2.4Z"
        fill="#A4B0A1"
      />
      {/* right leaf — terracotta */}
      <path
        d="M24.6 21c1.4-4.6 5.2-7 8.8-7.2.4 3.8-1.4 8-5.4 9.4-1.2.4-2.6-.4-3.4-2.2Z"
        fill="#C5704F"
      />
    </svg>
  );
}
