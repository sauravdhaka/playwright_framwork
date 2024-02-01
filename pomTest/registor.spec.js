import { test } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registrationPage";

const email = "lala02@gmail.com";
const password = "Lala@kaka123";


test("Validate Error messagae after click on create account button", async ({
  page,
}) => {
  //create account click
  //validate assertion
  const registor = new RegisterPage(page);
  await page.goto(
    "https://magento.softwaretestingboard.com/customer/account/create/"
  );
  await registor.clickCreateAccountButton();
  await registor.getFirstNameError();
});

test("Validate Error messagae after click on create account button with first name", async ({
    page,
  }) => {
    // insert first name
    //create account click
    //validate assertion
    const registor = new RegisterPage(page);
    await page.goto(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    await registor.enterFirstNmae("Lala");
    await registor.clickCreateAccountButton();
    await registor.getLastNameError();
  });


  test("Validate Error messagae after click on create account button with first name and last name", async ({
    page,
  }) => {
    // insert first name
    // insert last name
    //create account click
    //validate assertion

    const registor = new RegisterPage(page);
    await page.goto(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    await registor.enterFirstNmae("Lala");
    await registor.enterLastNmae("kaka");
    await registor.clickCreateAccountButton();
    await registor.getEmailError();
  });


  test("Validate Error messagae after click on create account button with first name and last name and Email", async ({
    page,
  }) => {
    // insert first name
    // insert last name
    //insert email
    //create account click
    //validate assertion

    const registor = new RegisterPage(page);
    await page.goto(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    await registor.enterFirstNmae("Lala");
    await registor.enterLastNmae("kaka");
    await registor.enterEmail(email);
    await registor.clickCreateAccountButton();
    await registor.getPasswordError();
  });

  test.only("Validate Error messagae after click on create account button with first name and last name and with used Email", async ({
    page,
  }) => {
    // insert first name
    // insert last name
    //insert used email
    //create account click
    //validate assertion

    const registor = new RegisterPage(page);
    await page.goto(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    await registor.enterFirstNmae("Lala");
    await registor.enterLastNmae("kaka");
    await registor.enterEmail(email);
    await registor.clickCreateAccountButton();
    await registor.geUsedtEmailError();
  });

  test("Validate Error messagae after click on create account button with first name and last name and Email and Password", async ({
    page,
  }) => {
    // insert first name
    // insert last name
    //insert email
    // insert password
    //create account click
    //validate assertion

    const registor = new RegisterPage(page);
    await page.goto(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    await registor.enterFirstNmae("Lala");
    await registor.enterLastNmae("kaka");
    await registor.enterEmail(email);
    await registor.enterPassword(password);
    await registor.clickCreateAccountButton();
    await registor.getConfirmPasswordError();
  });

  test("With all required feilds", async ({ page }) => {
    const registor = new RegisterPage(page);
    await page.goto(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    await registor.enterFirstNmae("Lala");
    await registor.enterLastNmae("kaka");
    await registor.enterEmail(email);
    await registor.enterPassword(password);
    await registor.enterConfirmPassword(password);
    await registor.clickCreateAccountButton();
  });