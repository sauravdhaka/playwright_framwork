import { test } from "../fixtures/signupFixture.js";


const email = "lala03@gmail.com";
const password = "Lala@kaka123";
const base_url =
  "https://magento.softwaretestingboard.com/customer/account/create/";

test("Validate Error messagae after click on create account button", async ({
  registerPage,
}) => {
  await registerPage.goToPage(base_url);
  await registerPage.clickCreateAccountButton();
  await registerPage.getFirstNameError();
});

test("Validate Error messagae after click on create account button with first name", async ({
  registerPage,
}) => {
  await registerPage.goToPage(base_url);
  await registerPage.enterFirstNmae("Lala");
  await registerPage.clickCreateAccountButton();
  await registerPage.getLastNameError();
});

test("Validate Error messagae after click on create account button with first name and last name", async ({
  registerPage,
}) => {
  await registerPage.goToPage(base_url);
  await registerPage.enterFirstNmae("Lala");
  await registerPage.enterLastNmae("kaka");
  await registerPage.clickCreateAccountButton();
  await registerPage.getEmailError();
});

test("Validate Error messagae after click on create account button with first name and last name and Email", async ({
  registerPage,
}) => {
  await registerPage.goToPage(base_url);
  await registerPage.enterFirstNmae("Lala");
  await registerPage.enterLastNmae("kaka");
  await registerPage.enterEmail(email);
  await registerPage.clickCreateAccountButton();
  await registerPage.getPasswordError();
});

test("Validate Error messagae after click on create account button with first name and last name and with used Email", async ({
  registerPage,
}) => {
  await registerPage.goToPage(base_url);
  await registerPage.enterFirstNmae("Lala");
  await registerPage.enterLastNmae("kaka");
  await registerPage.enterEmail(email);
  await registerPage.enterPassword(password);
  await registerPage.enterConfirmPassword(password);
  await registerPage.clickCreateAccountButton();
  await registerPage.geUsedtEmailError();
});

test("validate Error message afte click on create account button wiht invalid email", async ({
  registerPage,
}) => {
  await registerPage.goToPage(base_url);
  await registerPage.enterFirstNmae("Lala");
  await registerPage.enterLastNmae("kaka");
  await registerPage.enterEmail("email.com");
  await registerPage.clickCreateAccountButton();
  await registerPage.getEmailError();
});

test("Validate Error messagae after click on create account button with first name and last name and Email and Password", async ({
  registerPage,
}) => {
  await registerPage.goToPage(base_url);
  await registerPage.enterFirstNmae("Lala");
  await registerPage.enterLastNmae("kaka");
  await registerPage.enterEmail(email);
  await registerPage.enterPassword(password);
  await registerPage.clickCreateAccountButton();
  await registerPage.getConfirmPasswordError();
});

test("Validate Error message after click create account button with not matched password and confirm password", async ({
  registerPage,
}) => {
  await registerPage.goToPage(base_url);
  await registerPage.enterFirstNmae("Lala");
  await registerPage.enterLastNmae("kaka");
  await registerPage.enterEmail(email);
  await registerPage.enterPassword(password);
  await registerPage.enterConfirmPassword("kakahud");
  await registerPage.clickCreateAccountButton();
  await registerPage.getConfirmPasswordError();
});

test("Validate Error message after click create account button with all fields ", async ({
  registerPage,
}) => {
  await registerPage.goToPage(base_url);
  await registerPage.enterFirstNmae("Lala");
  await registerPage.enterLastNmae("kaka");
  await registerPage.enterEmail(email);
  await registerPage.enterPassword(password);
  await registerPage.enterConfirmPassword(password);
  await registerPage.clickCreateAccountButton();
});
