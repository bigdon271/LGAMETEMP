import { loadEnvConfig } from "@next/env";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

async function main() {
  loadEnvConfig(process.cwd());
  const { catalog } = await import("../config/runtime");
  const { siteConfig } = await import("../config/site.config");
  const assets = [
    ...Object.values(siteConfig.images),
    ...catalog.publishedGames.flatMap((game) =>
      [
        game.image,
        game.iframeSrc,
        game.content.whatIs.logo,
        game.content.howToPlay.image,
        game.seo.ogImage,
      ].filter((p): p is string => Boolean(p)),
    ),
  ];
  const errors: string[] = [];
  for (const asset of assets) {
    if (!asset.startsWith("/")) continue;
    const path = new URL(asset, "http://localhost").pathname;
    if (!existsSync(resolve("public", `.${decodeURIComponent(path)}`)))
      errors.push(`Missing public asset: ${asset}`);
  }
  if (errors.length) throw new Error(errors.join("\n"));
  console.log(
    `Configuration valid: ${catalog.publishedGames.length} games; indexing ${siteConfig.indexable ? "enabled" : "disabled"}.`,
  );
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
