import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('test');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('test123');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test');
  await page.getByRole('button', { name: 'Log in' }).click();
});