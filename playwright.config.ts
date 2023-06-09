import { PlaywrightTestConfig } from "@playwright/test";
require("dotenv").config();

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 50000,
  },
  reporter: "html",
  use: {
    baseURL: process.env.URL,
    extraHTTPHeaders: {
      Accept: "*",
    },
  },
};

export default config;
