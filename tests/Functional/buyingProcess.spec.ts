import test, { expect } from "@playwright/test";
import { Home } from "../Pages/home";
import { ProductDetails } from "../Pages/PageSections/productDetails";
import { Cart } from "../Pages/cart";
import { OrderModal } from "../Pages/PageSections/OrderModal";
import { userInfo } from "../Data/user";
import {PurchaseConfirmationModal} from "../Pages/PageSections/PurchaseConfirmationModal"

let productPrice;
let productName
let priceWithoutTaxes
let today = getFormattedDateOneMonthAgo()

test.beforeEach(async ({ page }) => {

    await page.context().clearCookies();
    await page.context().storageState();
    await page.context().clearPermissions();
    await page.goto('https://www.demoblaze.com/');
    await page.waitForLoadState('networkidle')
  });
  

  test('Verify Processing a payment', async ({page }) => {

    const home = new Home(page)
    const productDetails = new ProductDetails(page)
    const cart = new Cart(page)
    const orderModal = new OrderModal(page)

    await test.step('Select Product', async () => {
      const products = await home.geProducts()
      await home.selectProduct(products[0])
        
      await expect(productDetails.productName).toHaveText(products[0])
      
    });
    await test.step('Get productInnformatioin', async () => {
      productPrice = await productDetails.priceContainer.innerText()
      priceWithoutTaxes = productPrice.replace(/\s+\*\s*includes tax/, '').replace(/^\$\s*/, '')
      productName = await productDetails.productName.innerText()
    });


    await test.step('Add to Cart', async () => {
      const alert = page.waitForEvent('dialog');


      await productDetails.addToCartButton.click()
    
      const alertText = (await alert).message();
      await (await alert).accept();
    
      console.log('Alert text:', alertText);
        
    }); 

    await test.step('Go to cart',async()=>{
      await page.pause()
      await home.cartNavButton.click()
      await page.waitForLoadState('networkidle')
      const table =   await cart.formatTableResults()
      expect(table[0]).toEqual(productName)
      expect(table[1]).toEqual(priceWithoutTaxes)
      
    })

    await test.step('Place Order',async()=>{
      await cart.placeOrder.click()
    })

    await test.step('Complete order form',async()=>{

      await orderModal.fillModalInfo(userInfo)

    })
    await test.step('Submit form',async()=>{
    await orderModal.purchaseButton.click()

    })

    await test.step('Check successfull purchase',async()=>{

      
      const purchaseConfirmationModal = new PurchaseConfirmationModal(page)
      await page.waitForLoadState('networkidle')
      await expect(purchaseConfirmationModal.successfullMessage).toBeVisible()
      const receiptInfo = await purchaseConfirmationModal.getPurchaseInfo()
      console.log(receiptInfo)
       expect(receiptInfo).toContain(userInfo.name)
       expect(receiptInfo).toContain(userInfo.card)
       expect(receiptInfo).toContain(today.toString()) //date in demoblaze is displaying as if it was past month, today is 14/03/2024 it displays 14/02/2024



    })


});

function getFormattedDateOneMonthAgo() {
  const today = new Date();
  today.setMonth(today.getMonth() - 1);

  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1); // January is 0!
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}
