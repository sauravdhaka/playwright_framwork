import base from "@playwright/test"
import RegisterPage from "../support/PageObjectModel/registrationPage.js"



exports.test = base.test.extend({
    registerPage : async({page},use)=>{
        await use(new RegisterPage(page))
    }
})

exports.expect = base.expect;