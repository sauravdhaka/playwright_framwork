import {test} from "../../fixtures/loginFixture"
const email = "bani@gmail.com";
const password = "Bani@dhaka";
const base_url = "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/"



test("validate with no email and no password",async({loginPage})=>{
   await loginPage.goToPage(base_url)
   await loginPage.clickLoginButton()
   await loginPage.getMustHaveEmailError()
   await loginPage.getPasswordError()
})

test("validate with Invalid email",async({loginPage})=>{
    await loginPage.goToPage(base_url)
    await loginPage.enterEmail("lala.com")
    await loginPage.clickLoginButton()
    await loginPage.getInvalidEmailError()
    await loginPage.getPasswordError()
})

test("validate with valid email and no password",async({loginPage})=>{
    await loginPage.goToPage(base_url)
    await loginPage.enterEmail(email)
    await loginPage.clickLoginButton()
    await loginPage.getLoginPasswordError()
    await loginPage.getPasswordError()
})


test("validate with valid email and wrong  password",async({loginPage})=>{
    await loginPage.goToPage(base_url)
    await loginPage.enterEmail(email)
    await loginPage.enterPassword("skfjhewf")
    await loginPage.clickLoginButton()
    await loginPage.getInvalidPasswordError()
})

test("validate wirh correct credentials",async({loginPage})=>{
    await loginPage.goToPage(base_url)
    await loginPage.enterEmail(email)
    await loginPage.enterPassword(password)
    await loginPage.clickLoginButton()
})