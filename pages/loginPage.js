import { expect, page } from "@playwright/test";
export default class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async enterEmail(email) {
    await this.page.locator("#email").type(email);
  }

  async enterPassword(password) {
    await this.page.locator("#password").type(password);
  }

  async clickLoginButton() {
    await this.page.waitForTimeout(1000);
    await this.page.locator("button:has-text('Sign In')").click()
    await this.page.waitForTimeout(3000);
  }

  async getMustHaveEmailError(){
   expect(this.page.locator("#email-error")).toBeVisible();
  }

  async getInvalidEmailError(){
   expect(this.page.locator("#email-error")).toBeVisible();
  }

  async getEmptyPasswordError(){
   expect(this.page.locator("#pass-error")).toBeVisible()
  }

}
