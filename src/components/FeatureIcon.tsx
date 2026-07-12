import type { FeatureIcon as FeatureIconKey } from "@/content/types";

const paths: Record<FeatureIconKey, React.ReactNode> = {
  // a journal / diary
  journal: (
    <>
      <path d="M5 4.2C5 3.5 5.6 3 6.3 3H18a1 1 0 0 1 1 1v15.5a1 1 0 0 1-1 1H6.3C5.6 20.5 5 20 5 19.3V4.2Z" />
      <path d="M5 17h14" />
      <path d="M9 3v17.5" />
      <path d="M12.5 7.5h3.5M12.5 10.5h3.5" />
    </>
  ),
  // home-screen widget showing a photo + age pill
  widget: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M3.8 15.5 8 11.8l3.2 2.8 3.6-3.6 5.4 4.8" />
      <circle cx="9" cy="8.5" r="1.3" />
      <rect x="12.5" y="16" width="6" height="2.4" rx="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  // a keepsake film with music
  film: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="3" />
      <path d="m10 9 5 3-5 3V9Z" />
      <path d="M7 3.2v3.6M17 3.2v3.6" />
    </>
  ),
  // invite the family — adding a person
  invite: (
    <>
      <circle cx="9.5" cy="8" r="3.2" />
      <path d="M3.8 19.2c.5-3.1 2.9-5 5.7-5s5.2 1.9 5.7 5" />
      <path d="M18.5 7.5v5M21 10h-5" />
    </>
  ),
  // emoji reaction — a heart
  reaction: (
    <>
      <path d="M12 19.5c-.4 0-.8-.14-1.1-.42C7.4 16 4 13.2 4 9.6 4 7.3 5.8 5.5 8 5.5c1.6 0 3.1.95 3.8 2.4l.2.42.2-.42c.7-1.45 2.2-2.4 3.8-2.4 2.2 0 4 1.8 4 4.1 0 3.6-3.4 6.4-6.9 9.48-.3.28-.7.42-1.1.42Z" />
    </>
  ),
  // several family members around the same child
  family: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6.5 20c.4-3.6 2.6-5.6 5.5-5.6s5.1 2 5.5 5.6" />
      <circle cx="4.8" cy="10.2" r="2" />
      <circle cx="19.2" cy="10.2" r="2" />
      <path d="M1.8 18c.3-2.3 1.5-3.7 3.2-3.7.8 0 1.5.3 2 .8M22.2 18c-.3-2.3-1.5-3.7-3.2-3.7-.8 0-1.5.3-2 .8" />
    </>
  ),
  // height and weight growth
  measure: (
    <>
      <path d="M7 3.5h10v17H7z" />
      <path d="M7 7h3M7 11h2M7 15h3" />
      <path d="M14 8.5v7M12 10.5l2-2 2 2M12 13.5l2 2 2-2" />
    </>
  ),
  // privacy — a shield holding a heart
  privacy: (
    <>
      <path d="M12 3.2 5 6v5.2c0 4.3 3 7.2 7 9.3 4-2.1 7-5 7-9.3V6l-7-2.8Z" />
      <path d="M12 14.6c-1.8-1.4-3-2.5-3-3.9 0-.95.78-1.7 1.7-1.7.6 0 1.05.32 1.3.74.25-.42.7-.74 1.3-.74.92 0 1.7.75 1.7 1.7 0 1.4-1.2 2.5-3 3.9Z" fill="currentColor" stroke="none" />
    </>
  ),
  // age computed automatically — a soft clock
  age: (
    <>
      <circle cx="12" cy="12.5" r="8" />
      <path d="M12 8v4.5l2.8 1.8" />
      <path d="M9 2.5h6" />
    </>
  ),
};

export function FeatureIcon({
  name,
  size = 26,
  className = "",
}: {
  name: FeatureIconKey;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
