import { calculateBudget } from "@/lib/functions";
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

    // Check if the dashboard page has the correct header
    await expect(page.locator("header h1").last()).toHaveText("Dashboard");
  });

  // Test buttons
  test("Buttons", async ({ page }) => {
    // Check if the buttons are visible
    const btn1 = page.locator("button").first();
    const btn2 = page.locator("button").nth(1);
    const btn3 = page.locator("button").nth(2);
    await expect(btn1).toBeVisible();
    await expect(btn2).toBeVisible();
    await expect(btn3).toBeVisible();

    // Check if the buttons have the correct text
    await expect(page.locator("button")).toHaveText([
      "Generate New Budget",
      "Download Report",
      "Log Out",
    ]);

    // Check if the buttons have the correct colors
    await expect(btn1).toHaveCSS("background-color", "rgb(37, 99, 235)");
    await expect(btn2).toHaveCSS("background-color", "rgb(37, 99, 235)");
    await expect(btn3).toHaveCSS("background-color", "rgb(220, 38, 38)");

    // Check if the buttons have the correct hover colors
    await expect(btn1).toHaveCSS("background-color", "rgb(37, 99, 235)");
    await expect(btn2).toHaveCSS("background-color", "rgb(37, 99, 235)");
    await expect(btn3).toHaveCSS("background-color", "rgb(220, 38, 38)");

    // click generate new budget button opens modal
    const modal = page.getByTitle("generate-modal");
    await expect(modal).toBeHidden();
    await btn1.click();
    await expect(modal).toBeVisible();

    // The modal should have Text Generate New Budget
    await expect(modal.getByText("Generate New Budget")).toHaveText(
      "Generate New Budget"
    );
    // the modal should have one inpute for monthly income and a select tag for focus
    const inputs = modal.locator("input");
    const select = modal.locator("select");
    const modalCancel = modal.locator("button").first();
    const modalConfirm = modal.locator("button").nth(1);

    await expect(inputs).toHaveCount(1);
    await expect(select).toHaveCount(1);

    await expect(modalCancel).toBeVisible();
    await expect(modalConfirm).toBeVisible();

    await expect(modalCancel).toHaveText("Cancel");
    await expect(modalConfirm).toHaveText("Generate ");

    await modalCancel.click();
    await expect(modal).toBeHidden();
    // Balanced Journey
    btn1.click();
    inputs.fill("100000");
    select.selectOption({ label: "Balanced" });
    await modalConfirm.click();

    await expect(modal).toBeHidden();

    // Dashboard page with data
    await expect(page).toHaveURL("http://localhost:3000/dashboard");
    const income = page.locator("#overview >div").first();
    const expense = page.locator("#overview >div").nth(1);
    const savings = page.locator("#overview >div").last();

    await expect(income.locator("#total-income")).toHaveText("100,000");
    await expect(savings.locator("#net-savings")).toHaveText("19,685.039");
    await expect(expense.locator("#total-expenses")).toHaveText("80,314.961");

    // Breakdown
    const breakdown = page.locator("#breakdown");
    await expect(breakdown).toBeVisible();
    expect(breakdown).toContainText("Budget Breakdown");
    expect(breakdown).toContainText("Balanced Plan");
    expect(breakdown).toContainText("Savings");
    expect(breakdown).toContainText("Investments");
    expect(breakdown).toContainText("Housing");
    expect(breakdown).toContainText("Groceries");
    expect(breakdown).toContainText("Transportation");
    expect(breakdown).toContainText("Entertainment");
    expect(breakdown).toContainText("Healthcare");
    expect(breakdown).toContainText("Miscellaneous");

    // Investment heavy journey
    btn1.click();
    inputs.fill("100000");
    select.selectOption({ label: "Investment-Heavy" });
    await modalConfirm.click();
    await expect(modal).toBeHidden();

    // Dashboard page with data
    await expect(page).toHaveURL("http://localhost:3000/dashboard");
    await expect(income.locator("#total-income")).toHaveText("100,000");
    await expect(savings.locator("#net-savings")).toHaveText("0");
    await expect(expense.locator("#total-expenses")).toHaveText("100,000");
    // Breakdown
    await expect(breakdown).toBeVisible();
    expect(breakdown).toContainText("Budget Breakdown");
    expect(breakdown).toContainText("Investments Plan");
    expect(breakdown).toContainText("Investments");
    expect(breakdown).toContainText("Housing");
    expect(breakdown).toContainText("Groceries");
    expect(breakdown).toContainText("Transportation");
    expect(breakdown).toContainText("Entertainment");
    expect(breakdown).toContainText("Healthcare");
    expect(breakdown).toContainText("Miscellaneous");

    // Savings journey
    btn1.click();
    inputs.fill("100000");
    select.selectOption({ label: "Savings-Heavy" });
    await modalConfirm.click();
    await expect(modal).toBeHidden();

    // Dashboard page with data
    await expect(page).toHaveURL("http://localhost:3000/dashboard");
    await expect(income.locator("#total-income")).toHaveText("100,000");
    await expect(savings.locator("#net-savings")).toHaveText("33,653.846");
    await expect(expense.locator("#total-expenses")).toHaveText("66,346.154");
    // Breakdown
    await expect(breakdown).toBeVisible();
    expect(breakdown).toContainText("Budget Breakdown");
    expect(breakdown).toContainText("Savings Plan");
    expect(breakdown).toContainText("Savings");
    expect(breakdown).toContainText("Housing");
    expect(breakdown).toContainText("Groceries");
    expect(breakdown).toContainText("Transportation");
    expect(breakdown).toContainText("Entertainment");
    expect(breakdown).toContainText("Healthcare");
    expect(breakdown).toContainText("Miscellaneous");

    // click log out button
    await btn3.click();
    await expect(page).toHaveURL("http://localhost:3000/");
  });
});
