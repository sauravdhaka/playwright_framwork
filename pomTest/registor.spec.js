import { test } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registrationPage";

const email = "lala03@gmail.com";
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

  test("Validate Error messagae after click on create account button with first name and last name and with used Email", async ({
    page,
  }) => {
    // insert first name
    // insert last name
    //insert used email
    // insert pass
    //insert con-pass
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
    await registor.enterConfirmPassword(password);
    await registor.clickCreateAccountButton();
    await registor.geUsedtEmailError();
  });

  test("validate Error message afte click on create account button wiht invalid email",async({page})=>{
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
    await registor.enterEmail("email.com");
    await registor.clickCreateAccountButton();
    await registor.getEmailError();
  })

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

  test("Validate Error message after click create account button with not matched password and confirm password",async({page})=>{
    const registor = new RegisterPage(page);
    await page.goto(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    await registor.enterFirstNmae("Lala");
    await registor.enterLastNmae("kaka");
    await registor.enterEmail(email);
    await registor.enterPassword(password);
    await registor.enterConfirmPassword("kakahud");
    await registor.clickCreateAccountButton();
    await registor.getConfirmPasswordError();
  })

  test("Validate Error message after click create account button with all fields ", async ({ page }) => {
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

  