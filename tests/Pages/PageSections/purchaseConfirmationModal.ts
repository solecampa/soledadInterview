import { Page, Locator } from '@playwright/test';

export class PurchaseConfirmationModal {
    modal: Locator;
    successfullMessage: Locator

    constructor(page: Page) {
        this.modal = page.locator('.sweet-alert');
        this.successfullMessage = page.locator('text = Thank you for your purchase!')
    }


      
    async getPurchaseInfo() {
        
        const infoText = await this.modal.textContent();
        return infoText
        
    }
    
    
    
}
