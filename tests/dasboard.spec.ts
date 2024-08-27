import { test, expect } from "@playwright/test";

test.describe("Dashboard Page", () => {
  // Before each test, navigate to the home page
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/dashboard");
  });

  // Test if the dashboard page renders correctly
  test("Renders correctly", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/dashboard");

    // Check if the dashboard page has the correct title
    await expect(page).toHaveTitle("Spend Guard | Dashboard");
  });
});
