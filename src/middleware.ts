import { NextResponse, type NextRequest } from "next/server";

/**
 * Only handles "/" — sends visitors to a localized homepage. Everything else
 * (/.well-known, /i/*, /vi, /en, assets, sitemap, robots) routes normally.
 */
export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept-language") ?? "";
  const first = accept.split(",")[0]?.trim().toLowerCase() ?? "";
  const locale = first.startsWith("en") ? "en" : "vi";
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/"],
};
