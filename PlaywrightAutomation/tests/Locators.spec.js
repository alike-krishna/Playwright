//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test'

test('Locators', async ({page}) => {
  await page.goto("https://demoblaze.com/index.html");
  //await expect(page).toHaveTitle('STORE');
  await page.click('id=login2') // locate element using CSS
  await page.fill('#loginusername', 'test') // locate element using CSS
  await page.fill('#loginpassword', 'test') // locate element using CSS
  await page.click("//button[normalize-space()='Log in']") // locate element using XPath

  const logoutlink = await page.locator("//a[normalize-space()='Log out']");
  await expect(logoutlink).toBeVisible();

  // No need for page.close() in Playwright Test runner
});

//To run script with specific browser 
//npx playwright test Locators.spec.js --project chromium --headed