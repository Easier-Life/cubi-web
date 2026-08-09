import type { MetadataRoute } from "next";
import { guides, guideSlug } from "@/content/guides";
import { locales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

/**
 * Pages are listed under /vi with an hreflang alternate for every other
 * language. Guides have translated slugs, so their alternates are built
 * per-locale rather than by appending one shared path to all four.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/download", priority: 0.8 },
    { path: "/guides", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/support", priority: 0.7 },
    { path: "/privacy", priority: 0.6 },
    { path: "/terms", priority: 0.6 },
    { path: "/delete-account", priority: 0.5 },
  ];

  // The newest guide edit stands in for "the site changed" — better than a
  // hardcoded date, which silently rots every time the content moves on.
  const siteModified = new Date(
    guides.map((g) => g.updated).sort().at(-1) ?? "2026-07-26",
  );

  const staticEntries: MetadataRoute.Sitemap = pages.map(({ path, priority }) => ({
    url: `${siteConfig.url}/vi${path}`,
    lastModified: siteModified,
    changeFrequency: "monthly",
    priority,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteConfig.url}/${l}${path}`]),
      ),
    },
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${siteConfig.url}/vi/guides/${guideSlug(guide, "vi")}`,
    lastModified: new Date(guide.updated),
    changeFrequency: "yearly",
    priority: 0.7,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [
          l,
          `${siteConfig.url}/${l}/guides/${guideSlug(guide, l)}`,
        ]),
      ),
    },
  }));

  return [...staticEntries, ...guideEntries];
}
