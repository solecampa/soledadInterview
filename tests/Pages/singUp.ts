import { Locator, Page } from "@playwright/test";

export class SingUp{
    page:Page;
    userNameField: Locator;
    passWordField:Locator;
    loginButton:Locator;
    closeButton:Locator

    constructor(page:Page){
        this.page = page
        this.userNameField = page.locator('#sign-username')
        this.passWordField = page.locator('#sign-password')
        this.loginButton = page.getByRole('button', { name: 'Sing Up' })
        this.closeButton = page.getByRole('button', { name: 'Close' })
    }

    async singUp(username:string,password:string){
        await this.page.waitForSelector('#sign-username')
        await this.userNameField.fill(username)
        await this.passWordField.fill(password)
    }

}