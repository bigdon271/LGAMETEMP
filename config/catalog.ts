import type { GameLibraryItem, GameCardData } from "./types/game";
import type { SiteConfig } from "./types/site";

// Next requires a nonempty static parameter list even for a single-game site.
export const emptyExportSlug = "template-empty-route";

export const informationPaths = [
  "/about/",
  "/contact/",
  "/privacy-policy/",
  "/terms-of-service/",
];
const reserved = new Set([
  emptyExportSlug,
  "about",
  "contact",
  "privacy-policy",
  "terms-of-service",
  "404",
  "_not-found",
  "assets",
  "demo",
  "game",
  "games",
  "api",
]);

export function isSafeUrl(value: string, local = true) {
  if (local && /^\/(?!\/)/.test(value) && !/[\\\s]/.test(value)) return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch {
    return false;
  }
}

export function validateCatalog(
  site: SiteConfig,
  library: Record<string, GameLibraryItem>,
): string[] {
  const errors: string[] = [];
  const selected = [site.mainGameSlug, ...site.subGameSlugs];
  if (new Set(selected).size !== selected.length)
    errors.push("Main and sub-game slugs must be unique.");
  for (const [key, game] of Object.entries(library)) {
    if (
      key !== game.slug ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(game.slug) ||
      reserved.has(game.slug)
    )
      errors.push(`Invalid or reserved game slug: ${key}`);
  }
  for (const slug of selected) {
    const game = library[slug];
    if (!game) {
      errors.push(`Unknown selected game: ${slug}`);
      continue;
    }
    if (slug === site.mainGameSlug && !game.published)
      errors.push("The main game must be published.");
    if (!game.published) continue;
    for (const [field, value] of Object.entries({
      name: game.name,
      shortDesc: game.shortDesc,
      title: game.seo.title,
      description: game.seo.description,
      about: game.content.whatIs.description,
      howToPlay: game.content.howToPlay.description,
      deviceNote: game.deviceNote,
      reloadWarning: game.player.reloadWarning,
    })) {
      if (!value?.trim()) errors.push(`${slug}: missing ${field}`);
    }
    for (const [field, value] of Object.entries({
      iframeSrc: game.iframeSrc,
      image: game.image,
      logo: game.content.whatIs.logo,
      howToImage: game.content.howToPlay.image,
    })) {
      if (!isSafeUrl(value)) errors.push(`${slug}: invalid ${field}`);
    }
    if (game.sourceUrl && !isSafeUrl(game.sourceUrl, false))
      errors.push(`${slug}: invalid sourceUrl`);
    if (game.seo.ogImage && !isSafeUrl(game.seo.ogImage))
      errors.push(`${slug}: invalid OG image`);
    if (
      ![game.player.width, game.player.height].every(
        (n) => Number.isFinite(n) && n > 0,
      )
    )
      errors.push(`${slug}: player dimensions must be positive`);
    if (
      !game.controls.length ||
      game.controls.some((c) => !c.action.trim() || !c.input.trim())
    )
      errors.push(`${slug}: controls are required`);
    const ids = game.content.faq.items.map((item) => item.id);
    if (
      new Set(ids).size !== ids.length ||
      game.content.faq.items.some(
        (item) =>
          !item.id.trim() || !item.question.trim() || !item.answer.trim(),
      )
    )
      errors.push(`${slug}: FAQ items need unique IDs, questions and answers`);
    for (const related of game.relatedSlugs || [])
      if (!library[related])
        errors.push(`${slug}: unknown related game ${related}`);
    if (site.indexable && game.demo)
      errors.push(`${slug}: demo content cannot be indexed`);
  }
  try {
    const url = new URL(site.metadata.url);
    if (
      !["http:", "https:"].includes(url.protocol) ||
      url.username ||
      url.password ||
      url.pathname !== "/" ||
      url.search ||
      url.hash
    )
      errors.push(
        "SITE_URL must be an HTTP(S) origin without a path, credentials, query or fragment.",
      );
    if (
      site.indexable &&
      (url.protocol !== "https:" ||
        /^(localhost|127\.0\.0\.1|\[::1\])$/.test(url.hostname) ||
        /(^|\.)example\.(com|org|net)$/.test(url.hostname) ||
        /\.(test|invalid|localhost)$/.test(url.hostname))
    )
      errors.push("An indexable site needs a real HTTPS domain.");
  } catch {
    errors.push("SITE_URL must be a valid URL.");
  }
  for (const [key, value] of Object.entries(site.images))
    if (!isSafeUrl(value)) errors.push(`Invalid site image: ${key}`);
  if (
    site.indexable &&
    (!site.legalReviewed ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(site.metadata.email))
  )
    errors.push(
      "Review legal content and configure a real contact email before enabling indexing.",
    );
  return errors;
}

export function createCatalog(
  site: SiteConfig,
  library: Record<string, GameLibraryItem>,
) {
  const errors = validateCatalog(site, library);
  if (errors.length)
    throw new Error(`Invalid site configuration:\n${errors.join("\n")}`);
  const mainGame = library[site.mainGameSlug];
  const subGames = site.subGameSlugs
    .map((slug) => library[slug])
    .filter((game) => game.published);
  const publishedGames = [mainGame, ...subGames];
  const gamePath = (slug: string) =>
    slug === mainGame.slug ? "/" : `/${slug}/`;
  const toCard = (game: GameLibraryItem): GameCardData => ({
    slug: game.slug,
    name: game.name,
    shortDesc: game.shortDesc,
    image: game.image,
    iframeSrc: game.iframeSrc,
    url: gamePath(game.slug),
  });
  return {
    mainGame,
    subGames,
    publishedGames,
    gamePath,
    toCard,
    getSubGame: (slug: string) => subGames.find((game) => game.slug === slug),
    getRelatedGames: (slug: string) => {
      const current = publishedGames.find((game) => game.slug === slug);
      const preferred = current?.relatedSlugs;
      const candidates = preferred
        ? preferred.flatMap((id) =>
            publishedGames.filter((game) => game.slug === id),
          )
        : publishedGames;
      return candidates
        .filter(
          (game, i, all) =>
            game.slug !== slug &&
            all.findIndex((other) => other.slug === game.slug) === i,
        )
        .map(toCard);
    },
  };
}
