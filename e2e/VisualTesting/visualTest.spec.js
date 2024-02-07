import  {expect, test} from "@playwright/test"


test("Landing page visual test",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/")

    expect(await page.screenshot()).toMatchSnapshot('landing.png')
})

test("Login page visual test",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/")
    expect(await page.screenshot()).toMatchSnapshot('login.png')
})

test("sign up page visual test",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/create/")
    expect(await page.screenshot()).toMatchSnapshot('register.png')
})