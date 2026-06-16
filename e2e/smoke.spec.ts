import { expect, test } from "@playwright/test";

test("home page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /design and print-on-demand studio/i })).toBeVisible();
});

test("content page loads", async ({ page }) => {
  await page.goto("/content");
  await expect(page.getByRole("heading", { name: /Stories, captions/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Story Drops", exact: true })).toBeVisible();
});

test("design page loads", async ({ page }) => {
  await page.goto("/design");
  await expect(page.getByRole("heading", { name: /Artwork, patterns/i })).toBeVisible();
  await expect(page.getByText("Collection board")).toBeVisible();
});

test("studio page loads", async ({ page }) => {
  await page.goto("/studio");
  await expect(page.getByRole("heading", { name: /Product showcases/i })).toBeVisible();
  await expect(page.getByText("Affiliate area")).toBeVisible();
});

test("studio product page loads", async ({ page }) => {
  await page.goto("/studio/cozy-bear-couple-reading-together");
  await expect(page.getByRole("heading", { name: "Cozy Bear Couple Reading Together", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: /Shop this design/i })).toBeVisible();
});

test("search page interaction works", async ({ page }) => {
  await page.goto("/search");
  await page.getByLabel("Search query").fill("unlikely-astra-query");
  await expect(page.getByText("Searchable content will appear")).toBeVisible();
});

test("header navigation is available", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Content", exact: true }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Design", exact: true }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Studio", exact: true }).first()).toBeVisible();
});
