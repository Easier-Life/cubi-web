import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "", priority: 1 },
    { path: "/download", priority: 0.8 },
    { path: "/support", priority: 0.7 },
    { path: "/privacy", priority: 0.6 },
    { path: "/terms", priority: 0.6 },
    { path: "/delete-account", priority: 0.5 },
  ];
  const lastModified = new Date("2026-07-12T00:00:00.000Z");

  return paths.map(({ path, priority }) => ({
    url: `${siteConfig.url}/vi${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
    alternates: {
      languages: {
        vi: `${siteConfig.url}/vi${path}`,
        en: `${siteConfig.url}/en${path}`,
      },
    },
  }));
}
