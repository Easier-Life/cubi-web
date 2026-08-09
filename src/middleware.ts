import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/lib/i18n";
import { detectLocale, LOCALE_COOKIE } from "@/lib/locale-detect";

/** Bare paths that must work without a locale prefix (store consoles, emails, old links). */
const LOCALIZED_PATHS = new Set([
  "/",
  "/terms",
  "/privacy",
  "/support",
  "/delete-account",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Invite pages are dynamic, and Next consults htmlLimitedBots only when the
  // request carries a non-empty User-Agent — a UA-less scraper would still get
  // og:* streamed into <body> instead of <head>. Stamp a synthetic UA so
  // metadata always renders blocking there (see htmlLimitedBots in next.config).
  if (pathname.startsWith("/i/") && !request.headers.get("user-agent")) {
    const headers = new Headers(request.headers);
    headers.set("user-agent", "ua-less-scraper");
    return NextResponse.next({ request: { headers } });
  }

  // /vi/* or /en/* — remember the locale the visitor is reading, so a later
  // visit to a bare URL keeps their language.
  const prefix = pathname.split("/")[1] ?? "";
  if (isLocale(prefix)) {
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
    "/fr/:path*",
    "/de/:path*",
    "/i/:path*",
  ],
};
