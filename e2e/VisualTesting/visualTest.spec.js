import  {expect, test} from "@playwright/test"


test("first visual test",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/")
    expect(await page.screenshot()).toMatchSnapshot('landing.png')
})

test("different screen shots",async({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/create/")
    expect(await page.screenshot()).toMatchSnapshot('register.png')
})