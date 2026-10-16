import test from "node:test";
import assert from "node:assert/strict";
import { createCatalog, validateCatalog, isSafeUrl } from "../config/catalog";
import { gameLibrary } from "../config/games/library";
import { siteConfig } from "../config/site.config";
const fixture = () => ({
  site: structuredClone({ ...siteConfig, indexable: false }),
  library: structuredClone(gameLibrary),
});

test("unpublished and unselected games cannot create routes or recommendations", () => {
  const { site, library } = fixture();
  library["keyboard-demo"].published = false;
  const catalog = createCatalog(site, library);
  assert.equal(catalog.getSubGame("keyboard-demo"), undefined);
  assert.deepEqual(catalog.subGames, []);
  assert.deepEqual(catalog.getRelatedGames(site.mainGameSlug), []);
  assert.equal(catalog.getSubGame(site.mainGameSlug), undefined);
});
test("recommendations link internally and return to the homepage without self-links", () => {
  const { site, library } = fixture();
  library["keyboard-demo"].sourceUrl = "https://example.org/original";
  const catalog = createCatalog(site, library);
  assert.equal(
    catalog.getRelatedGames("pointer-demo")[0].url,
    "/keyboard-demo/",
  );
  assert.equal(catalog.getRelatedGames("keyboard-demo")[0].url, "/");
  assert.equal(catalog.getSubGame("unknown"), undefined);
});
test("bad publication data fails validation before pages are built", () => {
  const { site, library } = fixture();
  library["keyboard-demo"].iframeSrc = "";
  library["keyboard-demo"].player.width = 0;
  library["keyboard-demo"].content.faq.items[1].id = "focus";
  const errors = validateCatalog(site, library).join("\n");
  assert.match(errors, /invalid iframeSrc/);
  assert.match(errors, /dimensions/);
  assert.match(errors, /unique IDs/);
});
test("reserved and duplicate routes are rejected", () => {
  const { site, library } = fixture();
  site.subGameSlugs.push(site.mainGameSlug);
  library.about = { ...library["keyboard-demo"], slug: "about" };
  assert.match(validateCatalog(site, library).join("\n"), /unique/);
  assert.match(validateCatalog(site, library).join("\n"), /reserved/);
});
test("indexable builds cannot accidentally publish local demos", () => {
  const { site, library } = fixture();
  site.indexable = true;
  assert.match(
    validateCatalog(site, library).join("\n"),
    /demo content cannot be indexed/,
  );
  assert.match(validateCatalog(site, library).join("\n"), /real HTTPS domain/);
});
test("an independently configured real site can pass validation", () => {
  const { site, library } = fixture();
  site.indexable = true;
  site.metadata.url = "https://arcade.testsite.org";
  site.metadata.email = "hello@arcade.testsite.org";
  site.legalReviewed = true;
  Object.values(library).forEach((game) => {
    game.demo = false;
  });
  assert.deepEqual(validateCatalog(site, library), []);
});
test("unsafe embed and source schemes are rejected", () => {
  for (const url of [
    "javascript:alert(1)",
    "//external.test/game",
    "/\\external.test",
    "data:text/html,hello",
    "https://user:pass@example.org",
  ])
    assert.equal(isSafeUrl(url), false);
  assert.equal(isSafeUrl("/demo/pointer.html"), true);
  assert.equal(isSafeUrl("https://games.test/game/embed?mode=play"), true);
});
