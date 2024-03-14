import { ElementHandle, Locator, Page } from "@playwright/test";

export class Home{
    page:Page;
    homeNavButton: Locator;
    conactNavButton:Locator;
    cartNavButton:Locator;
    loginNavButton:Locator
    singUpNavButton:Locator
    aboutNavButton:Locator
    welcomeUser:Locator
    categoryElements:Promise<ElementHandle<SVGElement | HTMLElement>[]>
    productList:Promise<ElementHandle<SVGElement | HTMLElement>[]>

    constructor(page:Page){
        this.page = page
        this.homeNavButton = page.getByText('Home', { exact: true })
        this.conactNavButton = page.getByText('Contact', { exact: true })
        this.aboutNavButton = page.getByText('About us', { exact: true })
        this.cartNavButton = page.getByText('Cart', { exact: true })
        this.loginNavButton = page.getByText('Log in', { exact: true })
        this.singUpNavButton = page.getByText('Sing up', { exact: true })
        this.welcomeUser = page.locator('#nameofuser')
        this.categoryElements = page.$$('.list-group a[id="itemc"]')
        this.productList = page.$$('.card-title')
    }


    async getCategories() {
        let categories: string[] = [];
        for (const element of await this.categoryElements) {
            const category = await element.textContent();
            if (typeof category === 'string') {
                categories.push(category.trim());
            }
        }
        return categories;
    }
    

    async geProducts() {
        let products: string[] = [];
        for (const element of await this.productList) {
            const product = await element.textContent();
            if (typeof product === 'string') {
                products.push(product.trim());
            }
        }
        return products;
    }

    async selectProduct(productName){
        await this.page.getByRole('link', { name: productName }).click();

    }

  


}