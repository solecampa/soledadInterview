import { Locator, Page } from "@playwright/test";

export class LoginPage{
    page:Page;
    userNameField: Locator;
    passWordField:Locator;
    loginButton:Locator;
    closeButton:Locator

    constructor(page:Page){
        this.page = page
        this.userNameField = page.locator('#loginusername')
        this.passWordField = page.locator('#loginpassword')
        this.loginButton = page.getByRole('button', { name: 'Log in' })
        this.closeButton = page.getByRole('button', { name: 'Close' })
    }

    async logIn(username:string,password:string){
        await this.userNameField.fill(username)
        await this.passWordField.fill(password)
        await this.loginButton.click()
    }

}