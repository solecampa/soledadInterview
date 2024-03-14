import { Locator, Page } from "@playwright/test";

export class Cart{
    page:Page;
    deleteButton: Locator;
    placeOrder: Locator;
    tableLocator: Locator



    constructor(page:Page){
        this.page = page
        this.deleteButton = page.getByRole('link', { name: 'Delete' })
        this.placeOrder = page.getByRole('button', { name: 'Place Order' })
        this.tableLocator = page.locator('#tbodyid')
    }

    async formatTableResults(): Promise<string[]>{
        const innerText = (await this.tableLocator.innerText()).split("\t")
        const arr = innerText.filter(n => {
            if (n != "" && n != " " && n != "\t") {
                return (n.trim())
            }
        })
    
    return arr


}

}







