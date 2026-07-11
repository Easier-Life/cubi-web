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

// Next streams metadata into the <body> for any user agent NOT matched here
// (Next 15 "streaming metadata"), and link scrapers that only parse <head> —
// Zalo's "Zalo-Scrapper" first among them — then see no og:* tags at all, so
// invite previews come up blank. Overriding htmlLimitedBots REPLACES Next's
// built-in list (next/dist/shared/lib/router/utils/html-bots.js), so that
// list is re-included verbatim before our additions. Matching too broadly is
// harmless (the page renders fully, just with blocking metadata), so generic
// bot/scraper words act as a safety net for messengers we haven't met yet.
const nextDefaultHtmlLimitedBots =
  /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight/;
const messengerScrapers =
  /zalo|viber|kakaotalk|telegram|skype|snapchat|bot\b|crawler|spider|scraper|scrapper|preview|embed/;

const nextConfig: NextConfig = {
  htmlLimitedBots: new RegExp(
    `${nextDefaultHtmlLimitedBots.source}|${messengerScrapers.source}`,
    "i",
  ),
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
