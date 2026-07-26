import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { siteConfig } from "@/lib/site";

/**
 * Pages are listed under /vi with an hreflang alternate for /en. Guides have
 * translated slugs, so their alternates are built per-locale rather than by
 * appending one shared path to both languages.
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
      languages: {
        vi: `${siteConfig.url}/vi${path}`,
        en: `${siteConfig.url}/en${path}`,
      },
    },
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${siteConfig.url}/vi/guides/${guide.slug.vi}`,
    lastModified: new Date(guide.updated),
    changeFrequency: "yearly",
    priority: 0.7,
    alternates: {
      languages: {
        vi: `${siteConfig.url}/vi/guides/${guide.slug.vi}`,
        en: `${siteConfig.url}/en/guides/${guide.slug.en}`,
      },
    },
  }));

  return [...staticEntries, ...guideEntries];
}
