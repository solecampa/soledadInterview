import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';
import { Home } from '../Pages/home';

const validUserName = 'admin'
const validPassword = 'admin'

test.describe('Login functionalties', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.demoblaze.com/');
        await page.waitForLoadState('networkidle')
        await page.locator('#login2').click()
        await page.waitForLoadState('networkidle')
    });


    test('Verify you can log in with correct credentials', async ({page }) => {
        const loginPage = new LoginPage(page)
        const home = new Home(page)
        loginPage.logIn(validUserName, validPassword)
        await expect(home.welcomeUser).toBeVisible()
        const welcomeMessage = await home.welcomeUser.innerText()
        expect(welcomeMessage.toString()).toEqual("Welcome "+validUserName)
        
    });


   test('Verify you can log in with incorrect credentials', async ({page }) => {
        const loginPage = new LoginPage(page)
        const home = new Home(page)
        const alert = page.waitForEvent('dialog');


        loginPage.logIn(validUserName, '123')
      
        const alertText = (await alert).message();
        await (await alert).accept();
      
        console.log('Alert text:', alertText);
        
        await expect(home.welcomeUser).not.toBeVisible()

        
    }); 
 


    


});
  
