import { test, expect } from "@playwright/test";

test("independent pages, recommendations, metadata and FAQ work", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Pointer Demo");
  await expect(page.locator("iframe")).toHaveCount(1);
  await expect(page.locator("iframe")).toHaveAttribute(
    "src",
    "/demo/pointer.html",
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
  await page
    .getByRole("link", { name: "Play Keyboard Demo", exact: true })
    .click();
  await expect(page).toHaveURL(/\/keyboard-demo\/$/);
  await page.reload();
  await expect(page.locator("h1")).toHaveText("Keyboard Demo");
  await expect(page).toHaveTitle("Keyboard Demo | Game Site Template");
  await expect(page.locator("iframe")).toHaveAttribute(
    "src",
    "/demo/keyboard.html",
  );
  await expect(page.locator("#other-games a")).toHaveCount(1);
  await expect(page.locator("#other-games a")).toHaveAttribute("href", "/");
  await expect(
    page.locator('footer nav[aria-label="Games"] a').first(),
  ).not.toHaveAttribute("target", "_blank");
  await page.getByText("Does this demo store data?", { exact: true }).click();
  await expect(
    page.getByText(
      "No. The input count exists only in the current player session.",
    ),
  ).toBeVisible();
  await page
    .frameLocator("iframe")
    .getByRole("button", { name: "Right", exact: true })
    .click();
  await expect(page.frameLocator("iframe").locator("#score")).toHaveText(
    "Inputs: 1",
  );
  expect(errors).toEqual([]);
});

test("reload preserves the player on cancel and resets on confirmation", async ({
  page,
}) => {
  await page.goto("/");
  const frame = page.frameLocator("iframe");
  await frame.getByRole("button", { name: "Hit target" }).click();
  await expect(frame.locator("#score")).toHaveText("Points: 1");
  await expect(page.getByRole("status")).toHaveText(
    "If the game does not start, try reloading the player.",
  );
  await page.getByRole("button", { name: "Reload", exact: true }).click();
  await expect(page.getByRole("alertdialog")).toBeVisible();
  await page.getByRole("button", { name: "Cancel", exact: true }).click();
  await expect(frame.locator("#score")).toHaveText("Points: 1");
  await page.getByRole("button", { name: "Reload", exact: true }).click();
  await page
    .getByRole("button", { name: "Reload player", exact: true })
    .click();
  await expect(frame.locator("#score")).toHaveText("Points: 0");
});

test("fullscreen keeps controls accessible and follows external exit", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name === "mobile",
    "Desktop Fullscreen API; physical mobile browser support varies.",
  );
  await page.goto("/");
  await page.getByRole("button", { name: "Enter fullscreen" }).click();
  await expect
    .poll(() => page.evaluate(() => document.fullscreenElement?.id))
    .toBe("game-section");
  await page.getByRole("button", { name: "Reload", exact: true }).click();
  await expect(page.getByRole("alertdialog")).toBeVisible();
  await page.getByRole("button", { name: "Cancel", exact: true }).click();
  await page.evaluate(() => document.exitFullscreen());
  await expect(
    page.getByRole("button", { name: "Enter fullscreen" }),
  ).toBeVisible();
});

test("static HTML, missing routes and narrow layouts are correct", async ({
  request,
  page,
}) => {
  const response = await request.get("/");
  const html = await response.text();
  expect(html).toContain(
    "No. Reloading the player or leaving the page resets the counter.",
  );
  expect((await request.get("/not-a-game/")).status()).toBe(404);
  expect((await request.get("/pointer-demo/")).status()).toBe(404);
  expect((await request.get("/sub-game-1/")).status()).toBe(404);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("<loc>");
  await page.goto("/keyboard-demo/");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await expect(
    page.locator('img[src="/assets/template/keyboard.svg"]').first(),
  ).toBeVisible();
  // Scroll each lazy image into view, then wait for decoding before checking it.
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((element) =>
      element instanceof HTMLImageElement && element.complete && element.naturalWidth > 0,
    )).toBe(true);
  }
});
