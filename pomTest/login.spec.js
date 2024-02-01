import { test } from "@playwright/test";
import LoginPage from "../pages/loginPage";

const email = "lala02@gmail.com";
const password = "Lala@kaka123";


test("validate with no email and no password",async({page})=>{
    // sign in click
    // validate assertion
    const login = new LoginPage(page)
    await page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/")
    await login.clickLoginButton()
    await login.getMustHaveEmailError()
})

test("validate with Invalid email",async({page})=>{
    // sign in click
    // validate assertion
    const login = new LoginPage(page)
    await page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/")
    await login.enterEmail("lala@kaka.com")
    await login.clickLoginButton()
    await login.getInvalidEmailError()
})

test.only("validate with valid email and no password",async({page})=>{
    // valid email
    // sign in click
    // validate assertion
    const login = new LoginPage(page)
    await page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/")
    await login.enterEmail(email)
    await login.clickLoginButton()
    await login.getEmptyPasswordError()
})

