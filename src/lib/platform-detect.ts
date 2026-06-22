export type Platform = "ios" | "android" | "other";

/**
 * Mobile OS from a raw user-agent string. Pure and dependency-free (no React,
 * no `navigator`) so it's safe to import from server code — used by the
 * `/download` redirect to route a visitor to their store before any JS runs.
 * Note: iPadOS 13+ reports a desktop ("Macintosh") UA, so an iPad can't be
 * told apart server-side and resolves to "other" (the chooser page, which
 * still offers the App Store). Client code recovers the iPad case separately.
 */
export function platformFromUserAgent(ua: string | null | undefined): Platform {
  if (!ua) return "other";
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  return "other";
}
