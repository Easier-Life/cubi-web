import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  // Next streams metadata into the <body> for any user agent NOT matched by
  // htmlLimitedBots (Next 15 "streaming metadata"); link scrapers that only
  // parse <head> — Zalo first among them — then see no og:* tags and show a
  // blank invite preview. A UA allowlist proved too fragile (Zalo's scraper
  // does not send a recognizable UA), so match EVERY user agent: metadata on
  // this site is computed synchronously, blocking costs nothing, and the
  // whole point of these pages is to be scraped correctly.
  htmlLimitedBots: /[\s\S]*/,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
