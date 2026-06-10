import { expect, test } from "@playwright/test";

test("home page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Exploring Mysteries/i })).toBeVisible();
});

test("category page loads", async ({ page }) => {
  await page.goto("/mysteries");
  await expect(page.getByRole("heading", { name: "Mysteries", exact: true })).toBeVisible();
});

test("article page loads", async ({ page }) => {
  await page.goto("/articles/mystery-signal-archive");
  await expect(page.getByRole("heading", { name: /Mystery Signal Archive/i })).toBeVisible();
});

test("resources page loads", async ({ page }) => {
  await page.goto("/resources");
  await expect(page.getByRole("heading", { name: /Curated tools/i })).toBeVisible();
});

test("search page interaction works", async ({ page }) => {
  await page.goto("/search");
  await page.getByLabel("Search query").fill("creator");
  await expect(page.getByRole("link", { name: /Creator Operating System/i })).toBeVisible();
});

test("theme toggle is available", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Toggle theme").click();
  await expect(page.locator("html")).toHaveClass(/light|dark/);
});
