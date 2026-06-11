import type { Locale } from "@/lib/i18n";

/**
 * iPhone home screen showing the Cubi Large photo widget — the signature
 * feature. The "photo" is a warm painterly wash (no real child images);
 * the frosted age pill + a floating reaction chip tell the product story.
 */
export function PhoneWidget({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const agePill = locale === "vi" ? "6 tháng 12 ngày" : "6 months 12 days";
  const time = "9:41";
  const reactionFrom = locale === "vi" ? "Bà ngoại" : "Grandma";
  const reactionVerb = locale === "vi" ? "vừa thả tim" : "sent a heart";
  const widgetCaption =
    locale === "vi" ? "Bống đang lớn mỗi ngày" : "Bống is growing every day";

  return (
    <div className={`relative mx-auto w-full max-w-[300px] ${className}`}>
      {/* soft glow behind the phone */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, rgba(217,161,78,0.35), transparent 70%)",
        }}
      />

      {/* phone */}
      <div className="relative aspect-[300/620] rounded-[44px] bg-ink-900 p-[10px] shadow-[var(--shadow-phone)]">
        <div className="absolute inset-[10px] rounded-[36px] ring-1 ring-cream-50/10" />
        {/* screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[36px]">
          {/* wallpaper — soft Ghibli sky */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(170deg, #f8f3ec 0%, #f5e4c0 45%, #e8b59a 100%)",
            }}
          />
          {/* dynamic island */}
          <div className="absolute left-1/2 top-2.5 z-20 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-ink-900" />

          {/* status bar */}
          <div className="relative z-10 flex items-center justify-between px-6 pt-3 text-[12px] font-semibold text-ink-900">
            <span>{time}</span>
            <span className="flex items-center gap-1">
              <svg width="17" height="11" viewBox="0 0 17 11" aria-hidden="true" fill="currentColor">
                <rect x="0" y="6.5" width="3" height="4" rx="1" />
                <rect x="4.5" y="4" width="3" height="6.5" rx="1" />
                <rect x="9" y="2" width="3" height="8.5" rx="1" />
                <rect x="13.5" y="0" width="3" height="10.5" rx="1" opacity="0.4" />
              </svg>
              <svg width="22" height="11" viewBox="0 0 22 11" aria-hidden="true" fill="none">
                <rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="currentColor" opacity="0.5" />
                <rect x="2" y="2" width="13" height="7" rx="1.5" fill="currentColor" />
                <rect x="19.5" y="3.5" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.5" />
              </svg>
            </span>
          </div>

          {/* the Cubi Large widget */}
          <div className="relative z-10 mt-7 px-5">
            <div className="relative aspect-[1/1.05] overflow-hidden rounded-[22px] shadow-[var(--shadow-lg)]">
              {/* painterly "photo" */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 22%, rgba(251,247,241,0.95) 0%, rgba(245,228,192,0) 42%), radial-gradient(circle at 78% 72%, rgba(232,181,154,0.9) 0%, rgba(232,181,154,0) 52%), linear-gradient(155deg, #d9a14e 0%, #c5704f 55%, #8f4a32 100%)",
                }}
              />
              {/* soft bokeh */}
              <div className="absolute left-[18%] top-[58%] h-16 w-16 rounded-full bg-cream-50/40 blur-xl" />
              <div className="absolute left-[60%] top-[28%] h-12 w-12 rounded-full bg-honey-100/50 blur-lg" />
              <div className="absolute left-[44%] top-[46%] h-24 w-24 rounded-full bg-terracotta-100/30 blur-2xl" />

              {/* the brand daisy, drifting in the light — echoes the app icon */}
              <svg
                viewBox="0 0 64 64"
                aria-hidden="true"
                className="absolute left-[22%] top-[16%] h-14 w-14 -rotate-12 opacity-90 drop-shadow-[0_2px_6px_rgba(143,74,50,0.25)]"
              >
                {Array.from({ length: 8 }, (_, i) => (
                  <ellipse
                    key={i}
                    cx="32"
                    cy="15"
                    rx="6.5"
                    ry="12"
                    fill="#FBF7F1"
                    transform={`rotate(${i * 45} 32 32)`}
                  />
                ))}
                <circle cx="32" cy="32" r="7.5" fill="#D9A14E" />
                <circle cx="32" cy="32" r="4" fill="#F5E4C0" opacity="0.85" />
              </svg>

              {/* age pill — frosted glass, bottom-right */}
              <div className="absolute bottom-3 right-3 rounded-full bg-ink-900/35 px-3 py-1 text-[11px] font-semibold text-cream-50 backdrop-blur-md">
                {agePill}
              </div>
            </div>
            <p className="mt-3 px-1 text-center text-[12px] font-medium text-ink-700/80">
              {widgetCaption}
            </p>
          </div>

          {/* a few neutral app dots to ground it as a home screen */}
          <div className="absolute inset-x-0 bottom-0 z-10 px-7 pb-7">
            <div className="grid grid-cols-4 gap-4">
              {[
                "bg-sage-300/70",
                "bg-terracotta-200/70",
                "bg-honey-500/60",
                "bg-cream-300/90",
              ].map((c, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-[14px] ${c}`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating reaction chip — tells the no-comments-just-hearts story */}
      <div className="absolute -right-2 top-[34%] z-20 flex items-center gap-2 rounded-2xl border border-cream-300 bg-cream-50 px-3 py-2 shadow-[var(--shadow-lg)] sm:-right-6">
        <span
          className="grid h-7 w-7 place-items-center rounded-full bg-terracotta-50 text-[14px]"
          aria-hidden="true"
        >
          ❤️
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-[12px] font-semibold text-ink-900">
            {reactionFrom}
          </span>
          <span className="text-[11px] text-ink-500">{reactionVerb}</span>
        </span>
      </div>
    </div>
  );
}
