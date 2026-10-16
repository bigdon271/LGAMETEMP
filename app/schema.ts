import type { GameLibraryItem } from "@/config/types/game";
import { absoluteUrl } from "@/lib/metadata";
export function generateGameSchema(game: GameLibraryItem, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.name,
    description: game.seo.description,
    url: absoluteUrl(path),
    image: absoluteUrl(game.image),
    inLanguage: "en",
    gamePlatform: "Web Browser",
    ...(game.author
      ? { author: { "@type": "Person", name: game.author } }
      : {}),
  };
}
export function serializeSchema(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
