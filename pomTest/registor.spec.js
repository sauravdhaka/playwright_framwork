import {test} from "@playwright/test"
import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/registrationPage"


const email = "lala@gmail.com"
const password = "Lala@kaka123"
test("Register test POM",async({page})=>{
    const registor = new RegisterPage(page)
    await page.goto("https://magento.softwaretestingboard.com/customer/account/create/")
    await registor.enterFirstNmae("Lala")
    await registor.enterLastNmae("kaka")
    await registor.enterEmail(email)
    await registor.enterPassword(password)
    await registor.enterConfirmPassword(password)
    await registor.clickCreateAccountButton()

})