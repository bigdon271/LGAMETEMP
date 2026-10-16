import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import type { GameLibraryItem } from "@/config/types/game";

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.metadata.url).toString();
}
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = siteConfig.images.ogImage,
): Metadata {
  return {
    title,
    description,
    alternates: siteConfig.indexable
      ? { canonical: absoluteUrl(path) }
      : undefined,
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.metadata.name,
      type: "website",
      images: [{ url: absoluteUrl(image), alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
export function gameMetadata(game: GameLibraryItem, path: string): Metadata {
  return {
    ...pageMetadata(
      game.seo.title,
      game.seo.description,
      path,
      game.seo.ogImage || game.image,
    ),
    keywords: game.seo.keywords,
  };
}
