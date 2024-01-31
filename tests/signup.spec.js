const {test, expect} = require("@playwright/test")

test("Testing create an account page",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/create/")
    //await  page.locator('text=First Name').click()
    await page.locator('text=First Name').fill("testrig")
    await page.locator('text=Last Name').fill("Company")
    await page.locator('text=Email').fill("testring@gmail.com")
    await page.locator('text=Password').fill("Testring@123")
    await page.locator('text=Confirm Password').fill("Testring@123")
    await page.locator('button:has-text("Create an Account")').click()
    const locator = page.locator("text=Thank you for registering with Main Website Store.")
    await expect(locator).toBeVisible()  

})