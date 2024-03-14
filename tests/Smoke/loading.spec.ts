import { test, expect } from '@playwright/test';
import { Home } from '../Pages/home'
import { LoginPage } from '../Pages/loginPage';

test('Verify paage loads successfully', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveScreenshot("MainPage.png");
});

