const { test , expect } = require("@playwright/test");

test("input from data", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/input-form-demo"
  );
  await page.locator('[placeholder="Name"]').fill("Mr Test");
  await page.locator('[placeholder="Email"]').fill("randomemail@test.com");
  await page.locator('[placeholder="Password"]').fill("Abc123");
  await page.locator('[placeholder="Company"]').fill("Fake company");
  await page.locator('[placeholder="Website"]').fill("Fake website");
  await page.locator('select[name="country"]').selectOption("GB");
  await page.locator('[placeholder="City"]').fill("London");
  await page.locator('[placeholder="Address 1"]').fill("123 New road");
  await page.locator('[placeholder="Address 2"]').fill("New street");
  await page.locator('[placeholder="State"]').fill("New state");
  await page.locator('[placeholder="Zip code"]').fill("abc123");
  await page.locator('button:has-text("Submit")').click();
  const locator = page.locator(
    "text=Thanks for contacting us, we will get back to you shortly."
  );
  await expect(locator).toBeVisible();
});
