import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { catalog } from "@/config/runtime";
import { informationPaths } from "@/config/catalog";
import { absoluteUrl } from "@/lib/metadata";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.indexable) return [];
  return [
    ...catalog.publishedGames.map((game) => catalog.gamePath(game.slug)),
    ...informationPaths,
  ].map((path) => ({ url: absoluteUrl(path) }));
}
