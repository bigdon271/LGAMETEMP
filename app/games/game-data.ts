import { catalog } from "@/config/runtime";
export type { GameCardData as Game } from "@/config/types/game";
export const getOtherGames = (currentSlug = catalog.mainGame.slug) =>
  catalog.getRelatedGames(currentSlug);
