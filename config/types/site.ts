import type { ThemeId } from "./theme";
import type { GameLibraryItem } from "./game";

export interface QuickLink {
  text: string;
  href: string;
}
export interface SiteMetadata {
  name: string;
  url: string;
  description: string;
  email: string;
  author: string;
}
export interface SiteImages {
  logo: string;
  favicon: string;
  ogImage: string;
}
export interface SiteConfig {
  metadata: SiteMetadata;
  mainGameSlug: string;
  subGameSlugs: string[];
  theme: ThemeId;
  appearance: "light" | "dark";
  indexable: boolean;
  images: SiteImages;
  about: string;
  privacy: string;
  terms: string;
  legalReviewed: boolean;
  footer: { copyright: string };
}
export interface ResolvedSiteConfig extends SiteConfig {
  mainGame: GameLibraryItem;
  subGames: GameLibraryItem[];
}
