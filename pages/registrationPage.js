import {page} from "@playwright/test"
export default class RegisterPage{
    constructor(page){
        this.page = page
    }

    async enterFirstNmae(firstname){
       await this.page.locator("#firstname").type(firstname)
    }

    async enterLastNmae(lastname){
        await this.page.locator("#lastname").type(lastname)
     }

     async enterEmail(email){
        await this.page.locator("#email_address").type(email)
     }

     async enterPassword(password){
        await this.page.locator("#password").type(password)
     }

     async enterConfirmPassword(password){
        await this.page.locator("#password-confirmation").type(password)
     }

     async clickCreateAccountButton(){
        await Promise.all([
            this.page.waitForNavigation({waitUntill:"networkidle"}),
            this.page.locator("button:has-text('Create an Account')").click()
        ])
        
     }

}