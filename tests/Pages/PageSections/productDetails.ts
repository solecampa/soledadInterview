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
        this.addToCartButton =  page.locator('.col-sm-12.col-md-6.col-lg-6 a.btn.btn-success.btn-lg');
    }


}