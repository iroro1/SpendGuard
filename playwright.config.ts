import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // Directory where your tests are located
  retries: process.env.CI ? 2 : 0, // Number of retries on failure
  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
  timeout: 60000, // 60 seconds timeout per test
  expect: {
    timeout: 5000, // Expect timeout
  },
  use: {
    headless: process.env.HEADLESS !== "false", // Run tests in headless mode
    viewport: { width: 1280, height: 720 }, // Default viewport size
    video: "retain-on-failure", // Record video on test failure
    trace: "retain-on-failure", // Capture trace on test failure
    actionTimeout: 10000,
    baseURL: process.env.BASE_URL || "http://localhost:3000", // Base URL for your app
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    // Test against multiple devices
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
    // {
    //   name: "Mobile Safari",
    //   use: { ...devices["iPhone 12"] },
    // },

    // Test against branded browsers
    // {
    //   name: "Microsoft Edge",
    //   use: { ...devices["Desktop Edge"], channel: "msedge" },
    // },
    {
      name: "Google Chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
});
