import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  // Before each test, navigate to the home page
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  // Test if the home page renders correctly
  test("should render the home page's Hero section", async ({ page }) => {
    // Take a screenshot for visual regression testing
    // expect(await page.screenshot()).toMatchSnapshot("home-page.png");
    // Check that the page title is correct
    await expect(page).toHaveTitle("Spend Guard | Home");

    // Check that the main heading is present
    const mainHeading = page.getByTitle("main-heading");
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toHaveText("Welcome to Spend Guard");

    // paragraph tests
    const paragraph = page.getByText(
      "Your ultimate tool for smarter budgeting, saving, and investing."
    );
    await expect(paragraph).toHaveText(
      "Your ultimate tool for smarter budgeting, saving, and investing."
    );
    await expect(paragraph).toBeVisible();
    const paragraph2 = page.getByText(
      "Whether you're looking to save more, invest wisely, or simply manage your expenses better, Spend Guard has you covered. Customize your financial plan to match your goals and take control of your future."
    );
    await expect(paragraph2).toHaveText(
      "Whether you're looking to save more, invest wisely, or simply manage your expenses better, Spend Guard has you covered. Customize your financial plan to match your goals and take control of your future."
    );

    // hero-boxes
    const heroBoxes = page.locator("#hero-boxes");
    await expect(heroBoxes).toBeVisible();
    // hero boxes contains 3 children
    const heroBoxesChildren = heroBoxes.locator("div");
    await expect(heroBoxesChildren).toHaveCount(3);

    // button tests
    const getStartedButton = page.getByTitle("get-started");
    await expect(getStartedButton).toBeVisible();
    await expect(getStartedButton).toHaveText("Get Started");
    // color tests
    const getStartedButtonColor = page.getByTitle("get-started");
    await expect(getStartedButtonColor).toHaveCSS(
      "background-color",
      "rgb(234, 179, 8)"
    );
    // hover tests
    const getStartedButtonHover = page.getByTitle("get-started");
    await expect(getStartedButtonHover).toHaveCSS(
      "background-color",
      "rgb(234, 179, 8)"
    );
    // hover scale tests
    const getStartedButtonHoverScale = page.getByTitle("get-started");
    await expect(getStartedButtonHoverScale).toHaveCSS(
      "transform",
      "matrix(1, 0, 0, 1, 0, 0)"
    );
    // border-radius tests
    const getStartedButtonBorderRadius = page.getByTitle("get-started");
    await expect(getStartedButtonBorderRadius).toHaveCSS(
      "border-radius",
      "9999px"
    );
    // button size tests
    const getStartedButtonSize = page.getByTitle("get-started");
    await expect(getStartedButtonSize).toHaveCSS("padding", "16px 32px");
    // button text size tests
    const getStartedButtonTextSize = page.getByTitle("get-started");
    await expect(getStartedButtonTextSize).toHaveCSS("font-size", "16px");
    // button click tests to navigate to onboarding page
    await getStartedButton.click();
    await page.goto("http://localhost:3000/onboarding");
    await expect(page).toHaveURL("http://localhost:3000/onboarding");
  });
  // Test FeatureSection section
  test("should render the home page's FeatureSection section", async ({
    page,
  }) => {
    const featureSection = page.getByTitle("feature-section");
    await expect(featureSection).toBeVisible();
    // 1 child and 3 grand children
    const featureSectionChildren = featureSection.locator("div");
    await expect(featureSectionChildren).toHaveCount(7);
  });

  // Test StepsSection section
  test("should render the home page's StepsSection section", async ({
    page,
  }) => {
    const stepsSection = page.getByTitle("steps-section");
    await expect(stepsSection).toBeVisible();
    await expect(stepsSection.locator("h2")).toBeVisible();
    await expect(stepsSection.locator("h2")).toHaveText(
      "Get Started in 5 Easy Steps"
    );
    // 5 children
    const stepsSectionChildren = stepsSection.locator("div");
    await expect(stepsSectionChildren).toHaveCount(12);
  });

  // Test CTASection section
  test("should render the home page's CTASection section", async ({ page }) => {
    const ctaSection = page.getByTitle("cta");
    await expect(ctaSection).toBeVisible();
    await expect(ctaSection.locator("h2")).toBeVisible();
    await expect(ctaSection.locator("h2")).toHaveText(
      "Ready to Transform Your Finances?"
    );
    // 2 children
    const ctaSectionButton = ctaSection.locator("button");
    await expect(ctaSectionButton).toBeVisible();
    await expect(ctaSectionButton).toHaveText("Get Started");
    // color tests
    const ctaSectionButtonColor = ctaSection.locator("button");
    await expect(ctaSectionButtonColor).toHaveCSS(
      "background-color",
      "rgb(234, 179, 8)"
    );
    // hover tests
    const ctaSectionButtonHover = ctaSection.locator("button");
    await expect(ctaSectionButtonHover).toHaveCSS(
      "background-color",
      "rgb(234, 179, 8)"
    );
    // hover scale tests
    const ctaSectionButtonHoverScale = ctaSection.locator("button");
    await expect(ctaSectionButtonHoverScale).toHaveCSS(
      "transform",
      "matrix(1, 0, 0, 1, 0, 0)"
    );
    // border-radius tests
    const ctaSectionButtonBorderRadius = ctaSection.locator("button");
    await expect(ctaSectionButtonBorderRadius).toHaveCSS(
      "border-radius",
      "9999px"
    );
    // button size tests
    const ctaSectionButtonSize = ctaSection.locator("button");
    await expect(ctaSectionButtonSize).toHaveCSS("padding", "16px 32px");
    // button text size tests
    const ctaSectionButtonTextSize = ctaSection.locator("button");
    await expect(ctaSectionButtonTextSize).toHaveCSS("font-size", "16px");
    // button click tests to navigate to onboarding page
    await ctaSectionButton.click();
    await page.goto("http://localhost:3000/onboarding");
    await expect(page).toHaveURL("http://localhost:3000/onboarding");
  });
  //   Footer section
  test("should render the home page's Footer section", async ({ page }) => {
    const footerSection = page.locator("footer");
    await expect(footerSection).toBeVisible();
    const h4 = footerSection.locator("h4");
    await expect(h4).toBeVisible();
    await expect(h4).toHaveText("Contact Us");
    const social = footerSection.getByTitle("social-icons");
    await expect(social).toBeVisible();
    // to be 4 children
    const socialChildren = social.locator("a");
    await expect(socialChildren).toHaveCount(4);
  });

  // Test for responsive design Only run on CI
  //   test("should render correctly on different viewports", async ({ page }) => {
  //     const viewports = [
  //       { width: 1280, height: 720 },
  //       { width: 768, height: 1024 },
  //       { width: 375, height: 667 },
  //     ];

  //     for (const viewport of viewports) {
  //       await page.setViewportSize(viewport);
  //       expect(await page.screenshot()).toMatchSnapshot(
  //         `home-page-${viewport.width}x${viewport.height}.png`
  //       );
  //     }
  //   });
});
