import { loadEnvConfig } from "@next/env";
import {
  readFileSync,
  existsSync,
  readdirSync,
  statSync,
  writeFileSync,
  rmSync,
} from "node:fs";
import { resolve, join } from "node:path";

async function main() {
  loadEnvConfig(process.cwd());
  const { catalog } = await import("../config/runtime");
  const { siteConfig } = await import("../config/site.config");
  const { informationPaths, emptyExportSlug } = await import(
    "../config/catalog"
  );
  // Remove the build-only 404 placeholder needed when no subgames are selected.
  if (!catalog.subGames.length)
    rmSync(join("out", emptyExportSlug), { recursive: true, force: true });
  const errors: string[] = [];
  if (existsSync(join("out", emptyExportSlug)))
    errors.push("Build-only route must not be exported.");
  function requireFile(path: string) {
    const full = resolve("out", path.replace(/^\//, ""));
    if (!existsSync(full)) {
      errors.push(`Missing export: ${path}`);
      return "";
    }
    return readFileSync(full, "utf8");
  }
  for (const game of catalog.publishedGames) {
    const path = catalog.gamePath(game.slug);
    const html = requireFile(`${path}index.html`);
    if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1)
      errors.push(`${path}: expected one H1`);
    if ((html.match(/<iframe(?:\s|>)/g) || []).length !== 1)
      errors.push(`${path}: expected one iframe`);
    if (siteConfig.indexable && !html.includes('rel="canonical"'))
      errors.push(`${path}: missing canonical`);
    if (!siteConfig.indexable && !html.includes("noindex"))
      errors.push(`${path}: preview must be noindex`);
    if (/<iframe[^>]*src=""/.test(html))
      errors.push(`${path}: empty iframe source`);
  }
  for (const path of informationPaths) requireFile(`${path}index.html`);
  requireFile("404.html");
  const sitemap = requireFile("sitemap.xml");
  const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => match[1],
  );
  const expected = siteConfig.indexable
    ? [
        ...catalog.publishedGames.map((game) => catalog.gamePath(game.slug)),
        ...informationPaths,
      ].map((path) => new URL(path, siteConfig.metadata.url).toString())
    : [];
  if (
    JSON.stringify([...locations].sort()) !==
    JSON.stringify([...expected].sort())
  )
    errors.push("Sitemap does not match the published page list.");
  requireFile("robots.txt");
  if (existsSync(join("out", catalog.mainGame.slug, "index.html")))
    errors.push("The main game must not have a duplicate slug page.");
  function inspect(directory: string) {
    for (const name of readdirSync(directory)) {
      const file = join(directory, name);
      const stats = statSync(file);
      if (stats.isDirectory()) inspect(file);
      else {
        if (stats.size > 25 * 1024 * 1024)
          errors.push(`Static asset exceeds 25 MiB: ${file}`);
        if (name.endsWith(".html")) {
          const html = readFileSync(file, "utf8");
          for (const match of html.matchAll(
            /(?:src|href)="(\/(?!\/)[^"?#]*)(?:[?#][^"]*)?"/g,
          )) {
            const target = resolve("out", `.${decodeURIComponent(match[1])}`);
            if (!existsSync(target) && !existsSync(join(target, "index.html")))
              errors.push(`${file}: missing local target ${match[1]}`);
          }
        }
      }
    }
  }
  inspect("out");
  if (errors.length) throw new Error([...new Set(errors)].join("\n"));
  // Cloudflare static hosting reads this file. No application runtime is required.
  writeFileSync(
    "out/_headers",
    siteConfig.indexable
      ? "/*\n  X-Content-Type-Options: nosniff\n"
      : "/*\n  X-Robots-Tag: noindex, nofollow\n  X-Content-Type-Options: nosniff\n",
  );
  console.log(
    `Static export verified: ${catalog.publishedGames.length + informationPaths.length} pages, 404, sitemap, links and asset sizes.`,
  );
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
