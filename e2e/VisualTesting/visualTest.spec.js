import  {expect, test} from "@playwright/test"


test("example test case",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    await page.waitForTimeout(3000)
    await expect(page).toHaveScreenshot({maxDiffPixels : 30000})
})


test("landing page visual test case",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/")
    await page.waitForTimeout(3000)
    await expect(page).toHaveScreenshot({maxDiffPixels : 30000})
})


test("Login page visual test case",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    await page.waitForTimeout(3000)
    await expect(page).toHaveScreenshot({maxDiffPixels : 30000})
})

test("signup page visual test case",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/create/")
    await page.waitForTimeout(3000)
    await expect(page).toHaveScreenshot({maxDiffPixels : 30000})
})

test("signup page with partial part test case",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/create/")
    await page.waitForTimeout(3000)
    await expect(page).toHaveScreenshot({mask : [page.locator('#form-validate > fieldset.fieldset.create.account')] , maxDiffPixels : 30000})
})