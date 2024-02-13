import base from "@playwright/test"
import LoginPage from "../support/PageObjectModel/loginPage.js"

exports.test = base.test.extend({
    loginPage : async({page},use)=>{
        await use(new LoginPage(page))
    }
})

exports.expect = base.expect;