import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage} from '../pages/CartPage';


test('test', async ({ page }) => {

  //Login
  const login=new LoginPage(page);
  await login.gotoLoginPage();
  await login.login('test','test')
  await page.waitForTimeout(3000)

  //Home
  const home=new HomePage(page)
  await home.addProductToCart("Nexus 6")
  await page.waitForTimeout(3000)
  await home.gotoCart();

  //Cart
  const cart=new CartPage(page)
  await page.waitForTimeout(60000)
  const status=await cart.checkProductInCart('Nexus 6')
  await page.waitForTimeout(30000)
  expect(await status).toBe(true);
});