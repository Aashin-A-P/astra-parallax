import { expect, test } from "@playwright/test";

test("home page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /One clean hub/i })).toBeVisible();
});

test("category page loads", async ({ page }) => {
  await page.goto("/mysteries");
  await expect(page.getByRole("heading", { name: "Ideas", exact: true })).toBeVisible();
});

test("blog page loads with empty state", async ({ page }) => {
  await page.goto("/blog");
  await expect(page.getByRole("heading", { name: /Blog posts for projects/i })).toBeVisible();
  await expect(page.getByText("Your blog is ready for real writing.")).toBeVisible();
});

test("content page loads with channel empty state", async ({ page }) => {
  await page.goto("/content");
  await expect(page.getByRole("heading", { name: /Social content hub/i })).toBeVisible();
  await expect(page.getByText("No media yet")).toBeVisible();
});

test("resources page loads", async ({ page }) => {
  await page.goto("/resources");
  await expect(page.getByRole("heading", { name: /Curated tools/i })).toBeVisible();
});

test("search page interaction works", async ({ page }) => {
  await page.goto("/search");
  await page.getByLabel("Search query").fill("creator");
  await expect(page.getByText("No searchable content is published yet.")).toBeVisible();
});

test("header navigation is available", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Content", exact: true }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Blog", exact: true }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Store", exact: true }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "About Us", exact: true }).first()).toBeVisible();
});
