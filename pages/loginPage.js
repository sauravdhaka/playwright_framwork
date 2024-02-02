import { expect, page } from "@playwright/test";
export default class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async enterEmail(email) {
    await this.page.locator("#email").type(email);
  }

  async enterPassword(password) {
    await this.page.locator("#pass").type(password);
  }

  async clickLoginButton() {
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('button', { name: 'Sign In' }).click();
    await this.page.waitForTimeout(3000);
  }
  

  async getMustHaveEmailError(){
   expect(this.page.locator("#email-error")).toBeVisible();
  }

  async getInvalidEmailError(){
   expect(this.page.locator("#email-error")).toBeVisible();
  }

  async getPasswordError(){
   expect(this.page.locator("#pass-error")).toBeVisible()
  }

  async getLoginPasswordError(){
    expect(this.page.getByText('This is a required field.')).toBeVisible()
  }

  async getInvalidPasswordError(){
    await expect(this.page.getByText('The account sign-in was incorrect')).toBeVisible();
  }

}
