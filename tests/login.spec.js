const {test, expect} = require("@playwright/test");
const { log } = require("console");


test("Positive login test",async ({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");

    await page.locator("#email").fill("bani@gmail.com")
    await page.locator("#pass").fill("Bani@dhaka")
    await page.locator("button:has-text('Sign In')").click()

    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/');  
})


test("Negative Email test",async ({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    await page.locator("#email").fill("bani@gmaill.com")
    await page.locator("#pass").fill("Bani@dhaka")
    await page.locator("button:has-text('Sign In')").click()
    await expect(page.locator('#maincontent > div.page.messages')).toBeVisible({timeout : 10000})
})


test.only("Negative Password test",async ({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    await page.locator("#email").fill("bani@gmail.com")
    await page.locator("#pass").fill("Banii@dhaka")
    await page.locator("button:has-text('Sign In')").click()
    await expect(page.locator('#maincontent > div.page.messages')).toBeVisible({timeout : 10000})
})