import { test, expect } from '@playwright/test';


test('Verify paage loads successfully', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    expect(await page.locator('#nava')).toHaveText('PRODUCT STORE')
});

