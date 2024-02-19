import { describe } from "node:test";
import { test } from "../../fixtures/loginFixture";
import { allure } from "allure-playwright";
import { log } from "console";
import { expect } from "playwright/test";
const email = "bani@gmail.com";
const password = "Bani@dhaka";
const base_url =
  "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/";

test("validate with no email and no password", async ({ loginPage }) => {
  await loginPage.goToPage(base_url);
  await loginPage.clickLoginButton();
  await loginPage.getMustHaveEmailError();
  await loginPage.getPasswordError();
});

test("validate with Invalid email", async ({ loginPage }) => {
  await loginPage.goToPage(base_url);
  await loginPage.enterEmail("lala.com");
  await loginPage.clickLoginButton();
  await loginPage.getInvalidEmailError();
  await loginPage.getPasswordError();
});

test("validate with valid email and no password", async ({ loginPage }) => {
  await loginPage.goToPage(base_url);
  await loginPage.enterEmail(email);
  await loginPage.clickLoginButton();
  await loginPage.getLoginPasswordError();
  await loginPage.getPasswordError();
});

test("validate with valid email and wrong  password", async ({ loginPage }) => {
  await loginPage.goToPage(base_url);
  await loginPage.enterEmail(email);
  await loginPage.enterPassword("skfjhewf");
  await loginPage.clickLoginButton();
  await loginPage.getInvalidPasswordError();
});

test("validate wirh correct credentials", async ({ loginPage }) => {
  await allure.tag("test");
  await loginPage.goToPage(base_url);
  await loginPage.enterEmail(email);
  await loginPage.enterPassword(password);
  await loginPage.clickLoginButton();
  await loginPage.navigateLoginPage();
});

test("just for fun @smoke", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const titles = page.locator(".card-body a");
  console.log(await page.title());
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("[type='password']").fill("learning");
  await page.locator("#signInBtn").click();

  //console.log(await page.locator(".card-body a").nth(0).textContent())
  await titles.first().waitFor();
  console.log(await titles.allTextContents());
});

test("UI controle @papa", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("[type='password']").fill("learning");
  const dropdown = page.locator("select.form-control");
  const documentLink = page.locator("[href*='documents-request']");
  await dropdown.selectOption("consult");
  //await page.pause()
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  await page.locator("#terms").click();
  expect(await page.locator("#terms")).toBeChecked();
  await expect(documentLink).toHaveAttribute("class", "blinkingText");
});

test("Child window handel @child", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[href*='documents-request']");
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    documentLink.click(),
  ]);
  const text = await newPage.locator(".red").textContent();
  const domain = text.split("@")[1].split(" ")[0].split('.')[0]
  console.log(domain);

});

