import  {expect, test} from "@playwright/test"


test("example test case",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    await expect(page).toHaveScreenshot()
})


test("landing page visual test case",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/")
    await expect(page).toHaveScreenshot()
})


test("Login page visual test case",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    await expect(page).toHaveScreenshot()
})

test("signup page visual test case",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/create/")
    await expect(page).toHaveScreenshot()
})

test("signup page with partial part test case",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/create/")
    await expect(page).toHaveScreenshot({mask : [page.locator('#form-validate > fieldset.fieldset.create.account')]})
})