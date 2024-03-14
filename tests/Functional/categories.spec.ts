import test, { expect } from "@playwright/test";
import { Home } from "../Pages/home";

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.waitForLoadState('networkidle')
  });
test('Verify categories are the expected', async ({page }) => {
    const home = new Home(page)
    let expectedCategories = ["Phones", "Laptops", "Monitors"]
    const categories = home.getCategories()
    console.log((await categories))
    expect(await categories).toEqual(expectedCategories)
});