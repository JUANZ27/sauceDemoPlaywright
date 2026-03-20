const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",
  reportPath: "reports/html",
  metadata: {
    browser: {
      name: "chromium",
      version: "latest",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Test Info",
    data: [
      { label: "Project", value: "SauceDemo Automation" },
      { label: "Framework", value: "Playwright + Cucumber" },
    ],
  },
});