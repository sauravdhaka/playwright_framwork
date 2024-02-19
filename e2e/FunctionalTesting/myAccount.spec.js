import {test} from "../../fixtures/myAccountFixture.js"

const email = "bani@gmail.com";
const password = "Bani@dhaka";
const base_url = "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/"




test("Welcom text test",async ({accountPage})=>{
    await accountPage.pageGoTO(base_url,email,password)
    await accountPage.welcomeText()
})

test("Logo should be visible"  , async ({accountPage})=>{
    await accountPage.pageGoTO(base_url,email,password)
    await accountPage.Logo()
})

