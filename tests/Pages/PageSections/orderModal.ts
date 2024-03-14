import { Page, Locator } from '@playwright/test';
import { User } from '../../../interfaces/interfaces';


export class OrderModal {
    private page: Page;


    closeModalButton: Locator;
    nameInput: Locator;
    countryInput: Locator;
    cityInput: Locator;
    cardInput: Locator;
    monthInput: Locator;
    yearInput: Locator;
    errorsLabel: Locator;
    closeButton: Locator;
    purchaseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.closeModalButton = page.locator('.modal-header .close');
        this.nameInput = page.locator('#name');
        this.countryInput = page.locator('#country');
        this.cityInput = page.locator('#city');
        this.cardInput = page.locator('#card');
        this.monthInput = page.locator('#month');
        this.yearInput = page.locator('#year');
        this.errorsLabel = page.locator('#errors');
        this.closeButton = page.locator('.modal-footer .btn-secondary');
        this.purchaseButton = page.getByRole('button', { name: 'Purchase' })
    }

    async fillModalInfo(userInformation:User){
        await this.nameInput.type(userInformation.name);
        await this.countryInput.type(userInformation.country);
        await this.cityInput.type(userInformation.city);
        await this.cardInput.type(userInformation.card);
        await this.monthInput.type(userInformation.month);
        await this.yearInput.type(userInformation.year);
    }
}
