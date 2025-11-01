const { test, expect } = require('@playwright/test');

test('Mouse Double Click', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const CopyTextbutton = await page.locator('//button[normalize-space()="Copy Text"]');

    //Double click action
    await CopyTextbutton.dblclick();
    
    const field2 = await page.locator('#field2');
    await expect(field2).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);

})