import base from "@playwright/test"
import MyAccountPage from "../support/PageObjectModel/myAccountPage";

exports.test = base.test.extend({
    accountPage : async({page},use)=>{
        await use(new MyAccountPage(page))
    }
})

exports.expect = base.expect;