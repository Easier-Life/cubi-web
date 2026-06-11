import { NextResponse, type NextRequest } from "next/server";

const SUPPORTED = ["vi", "en"] as const;
const DEFAULT_LOCALE = "en";
const LOCALE_COOKIE = "cubi-locale";

/** Bare paths that must work without a locale prefix (store consoles, emails, old links). */
const LOCALIZED_PATHS = new Set([
  "/",
  "/terms",
  "/privacy",
  "/support",
  "/delete-account",
]);

/**
 * Pick the visitor's locale: an explicit earlier choice (cookie set when they
 * read a localized page) wins; otherwise the device language via
 * Accept-Language, falling back to English when nothing matches.
 */
function detectLocale(request: NextRequest): string {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && (SUPPORTED as readonly string[]).includes(cookie)) return cookie;

  const accept = request.headers.get("accept-language") ?? "";
  // Entries arrive in preference order, e.g. "vi-VN,vi;q=0.9,en;q=0.8".
  for (const entry of accept.split(",")) {
    const tag = entry.split(";")[0]?.trim().toLowerCase() ?? "";
    const match = SUPPORTED.find((l) => tag === l || tag.startsWith(`${l}-`));
    if (match) return match;
  }
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /vi/* or /en/* — remember the locale the visitor is reading, so a later
  // visit to a bare URL keeps their language.
  const prefix = pathname.split("/")[1];
  if ((SUPPORTED as readonly string[]).includes(prefix)) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, prefix, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  if (LOCALIZED_PATHS.has(pathname)) {
    const locale = detectLocale(request);
    const target = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
    return NextResponse.redirect(new URL(target, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/terms",
    "/privacy",
    "/support",
    "/delete-account",
    "/vi/:path*",
    "/en/:path*",
  ],
};
