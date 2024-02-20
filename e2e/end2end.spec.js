import { expect, test } from "@playwright/test";

test("client login", async ({ page }) => {
  const email = "anshika@gmail.com";
  const productName = "ZARA COAT 3";
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client/");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill("Iamking@000");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  const titles = await page.locator(".card-body b").allTextContents();
  //console.log(titles);
  const count = await products.count();

  for (let i = 0; i < count; ++i) {
    if ((await products.nth(i).locator("b").textContent()) === productName) {
      // add to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }
  await page.locator("[routerlink*='cart']").click();
  await page.locator("div ul li div").first().waitFor();
  const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  expect(bool).toBeTruthy();
  await page.locator("text=Checkout").click();
  await page
    .locator('input[value="4542 9931 9292 2293"]')
    .fill("4542 9931 9292 2293");
  await page
    .locator(
      "body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(2) > input"
    )
    .fill("141");
  await page
    .locator(
      "body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(3) > div > input"
    )
    .fill("ali");
  await page.locator("input[name='coupon']").fill("hdfyitdda");
  //await page.locator(".btn.btn-primary.mt-1").click();
  //await page.locator("body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > input").fill()
  await page
    .locator('input[placeholder="Select Country"]')
    .pressSequentially("ind");
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();
  for (let i = 0; i < optionsCount; ++i) {
    const text = await dropdown.locator("button").nth(i).textContent();
    //console.log(text);
    if (text === " India") {
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }
  expect(page.locator(".user__name [type=text]").first()).toHaveText(email);
  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(
    " Thankyou for the order. "
  );
  const order = await page
    .locator(".em-spacer-1 .ng-star-inserted")
    .textContent();
  const orderId = order.split(" ")[2];
  await page.locator(".fa-handshake-o").click();

  const orders = page.locator('tr[class="ng-star-inserted"]');
  await orders.first().waitFor();
  const length = await orders.count();
  for (let i = 0; i < length; ++i) {
    if (
      (await orders.locator("[scope$='row']").nth(i).textContent()) === orderId
    ) {
      await orders.nth(i).locator(".btn").first().click();
      break;
    }
  }
  expect(await page.locator(".col-text").textContent()).toBe(orderId);
});
