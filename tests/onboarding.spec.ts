import { test, expect } from "@playwright/test";

test.describe("Onboarding Page", () => {
  // Before each test, navigate to the home page
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/onboarding");
  });

  // Test if the onboarding page renders correctly
  test("Renders correctly", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/onboarding");
  });

  // Test if the onboarding page has the correct title
  test("Has correct title", async ({ page }) => {
    await expect(page).toHaveTitle("Spend Guard | Onboarding");
  });

  // form tests to submit onboarding form
  test("Form submission", async ({ page }) => {
    const country = page.locator("#country");
    const currency = page.locator("#currency");
    const income = page.locator("#income");
    const focus = page.locator("#focus");
    const submitButton = page.locator("button");
    await expect(country).toBeVisible();
    await expect(currency).toBeVisible();
    await expect(income).toBeVisible();
    await expect(focus).toBeVisible();
    await expect(submitButton).toBeVisible();
    await country.selectOption("Nigeria");
    await currency.selectOption("NGN");
    await income.fill("50000");
    await focus.selectOption("Balanced");
    await submitButton.click();
    await page.goto("http://localhost:3000/dashboard");
    await expect(page).toHaveURL("http://localhost:3000/dashboard");
  });
});
