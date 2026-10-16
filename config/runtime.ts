import { siteConfig } from "./site.config";
import { gameLibrary } from "./games/library";
import { createCatalog } from "./catalog";
export const catalog = createCatalog(siteConfig, gameLibrary);
export function getResolvedSiteConfig() {
  return {
    ...siteConfig,
    mainGame: catalog.mainGame,
    subGames: catalog.subGames,
  };
}
export function getAllDisplayGames() {
  return catalog.publishedGames.map(catalog.toCard);
}
export function getFooterGameLinks() {
  return getAllDisplayGames().map((game) => ({
    text: game.name,
    href: game.url,
  }));
}
export function getCopyrightText() {
  return siteConfig.footer.copyright
    .replace("{year}", String(new Date().getFullYear()))
    .replace("{siteName}", siteConfig.metadata.name);
}
