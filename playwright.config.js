// @ts-check
const { defineConfig, devices } = require("@playwright/test");

const local = !process.env.CI;

module.exports = defineConfig({
  testDir: "tests",
  timeout: 30_000,
  retries: local ? 0 : 1,
  reporter: local ? "list" : [["list"], ["html", { open: "never" }]],
  use: { baseURL: "http://127.0.0.1:4173", trace: "retain-on-failure" },
  webServer: { command: "npx serve -l tcp://127.0.0.1:4173 .", url: "http://127.0.0.1:4173", reuseExistingServer: local, timeout: 60_000 },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], ...(local ? { channel: "msedge" } : {}) } },
    { name: "mobile", use: { ...devices["Pixel 7"], ...(local ? { channel: "msedge" } : {}) } },
  ],
});
