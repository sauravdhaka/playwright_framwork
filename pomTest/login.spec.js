import { test } from "@playwright/test";
import LoginPage from "../pages/loginPage";

const email = "bani@gmail.com";
const password = "Bani@dhaka";
const base_url = "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/"

test("validate with no email and no password",async({page})=>{
    // sign in click
    // validate assertion
    const login = new LoginPage(page)
    await page.goto(base_url)
    await login.clickLoginButton()
    await login.getMustHaveEmailError()
    await login.getPasswordError()
})

test("validate with Invalid email",async({page})=>{
    // sign in click
    // validate assertion
    const login = new LoginPage(page)
    await page.goto(base_url)
    await login.enterEmail("lala.com")
    await login.clickLoginButton()
    await login.getInvalidEmailError()
    await login.getPasswordError()
})

test("validate with valid email and no password",async({page})=>{
    // valid email
    // sign in click
    // validate assertion
    const login = new LoginPage(page)
    await page.goto(base_url)
    await login.enterEmail(email)
    await login.clickLoginButton()
    await login.getLoginPasswordError()
    await login.getPasswordError()
})


test("validate with valid email and wrong  password",async({page})=>{
    // valid email
    // wrong password
    // sign in click
    // validate assertion
    const login = new LoginPage(page)
    await page.goto(base_url)
    await login.enterEmail(email)
    await login.enterPassword("skfjhewf")
    await login.clickLoginButton()
    await login.getInvalidPasswordError()
})

test("validate wirh correct credentials",async({page})=>{
    //valid email
    //valid pass
    //sign click
    //valid assertion
    const login = new LoginPage(page)
    await page.goto(base_url)
    await login.enterEmail(email)
    await login.enterPassword(password)
    await login.clickLoginButton()
})