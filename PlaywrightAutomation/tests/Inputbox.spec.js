const {test, expect}=require('@playwright/test')

test('Handle Input box_Radio Button', async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

    //input box - use assertions to find the element is visible, is empty, is enabled, is editable.
    await expect(await page.locator("//input[@id='FirstName']")).toBeEditable();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEmpty();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEnabled();
    await expect(await page.locator("//input[@id='FirstName']")).toBeVisible();

        //Pausing the Code
    await page.waitForTimeout(5000);

     //input box - 2 ways to handle it
    //1. locate the element then perform action using fill method
    await page.locator("//input[@id='FirstName']").fill("John");
    //2.Call the fill function directly from page fixture and then pass the value
    //await page.fill('#FirstName','John');


})