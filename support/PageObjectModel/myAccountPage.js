import { exec } from "child_process";
import { expect } from "playwright/test";

export default class MyAccountPage{
    constructor(page){
        this.page = page;
    }

    async pageGoTO(base_url,email,password){
        await this.page.goto(base_url);
        await this.page.locator("#email").type(email);
        await this.page.locator("#pass").type(password);
        await this.page.getByRole("button", { name: "Sign In" }).click();
        await this.page.waitForTimeout(3000);
    }

    async welcomeText(){
        const element = await this.page.$(".logged-in")
        const text = await element?.textContent()
        expect(text).toBe("Welcome, Bani Dhaka!")
    }

    async Logo(){
        const image = await this.page.$(".logo")
        const isVisible = await image.isVisible();
        expect(isVisible).toBe(true);
    }


}