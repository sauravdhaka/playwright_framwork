import {expect, test} from "@playwright/test"
import { log } from "console"
import { PassThrough } from "stream"


test.only("client login",async({page})=>{
    const productName = "ZARA COAT 3"
    const products = page.locator(".card-body")
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator("#userEmail").fill("anshika@gmail.com")
    await page.locator("#userPassword").fill("Iamking@000")
    await page.locator("[value='Login']").click()
    await page.waitForLoadState('networkidle')
    const titles = await page.locator(".card-body b").allTextContents()
    //console.log(titles);
    const count = await products.count()
    console.log(count);
    for(let i=0;i < count ; ++i){
        if(await products.nth(i).locator("b").textContent() === productName){
            // add to cart
            await products.nth(i).locator("text= Add To Cart").click()
            break
        }
    }
    await page.locator("[routerlink*='cart']").click()
    await page.locator("div ul li div").first().waitFor()
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible()
    expect(bool).toBeTruthy()
    await page.locator("text=Checkout").click()
    await page.locator('input[value="4542 9931 9292 2293"]').fill("4542 9931 9292 2293")
    await page.locator("body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(2) > input").fill("141")
    await page.locator("body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(3) > div > input").fill("ali")
    await page.locator("input[name='coupon']").fill("hdfyitdda")
    await page.locator(".btn.btn-primary.mt-1").click()
    //await page.locator("body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > input").fill()
    await page.locator('input[placeholder="Select Country"]').fill("India")
    await page.locator(".action__submit").click()
    await page.pause()
})