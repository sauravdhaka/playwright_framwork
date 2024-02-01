import { page } from "@playwright/test";
export default class LoginPage{
    constructor(page){
        this.page = page
    }

    async enterEmail(email){
        await this.page.locator("#email_address").type(email)
     }

     async enterPassword(password){
        await this.page.locator("#password").type(password)
     }

     async clickLoginButton(){
        await this.page.click("input[name='Sign In'")
     }

}