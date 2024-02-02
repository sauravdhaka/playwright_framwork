import { expect, page } from "@playwright/test";
export default class RegisterPage {
  constructor(page) {
    this.page = page;
  }

  async enterFirstNmae(firstname) {
    await this.page.locator("#firstname").type(firstname);
  }

  async enterLastNmae(lastname) {
    await this.page.locator("#lastname").type(lastname);
  }

  async enterEmail(email) {
    await this.page.locator("#email_address").type(email);
  }

  async enterPassword(password) {
    await this.page.locator("#password").type(password);
  }

  async enterConfirmPassword(password) {
    await this.page.locator("#password-confirmation").type(password);
  }

  async clickCreateAccountButton() {
    await this.page.waitForTimeout(3000);
    await this.page.locator("button:has-text('Create an Account')").click();
    await this.page.waitForTimeout(3000);
  }

  async getFirstNameError() {
    expect(this.page.locator("#firstname-error")).toBeVisible();
  }

  async getLastNameError() {
    expect(this.page.locator("#lastname-error")).toBeVisible();
  }

  async getEmailError() {
    expect(this.page.locator("#email_address-error")).toBeVisible();
  }

  async geUsedtEmailError() {
   await expect(this.page.getByText('There is already an account')).toBeVisible();
  }

  async getPasswordError() {
     expect(this.page.locator("#password-error")).toBeVisible();
  }

  async getConfirmPasswordError() {
    expect(this.page.locator("#password-confirmation-error")).toBeVisible();
  }
}
