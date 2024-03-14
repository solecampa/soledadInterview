import { Locator, Page } from "@playwright/test";

export class ProductDetails{
    page:Page;
    productName: Locator;
    priceContainer: Locator;
    productDescription:Locator;
    addToCartButton:Locator


    constructor(page:Page){
        this.page = page
        this.productName = page.locator('.name')
        this.priceContainer = page.locator('.price-container')
        this.productDescription = page.locator('#more-information p')
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' })
    }


}