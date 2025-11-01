const { test, expect } = require('@playwright/test');
test('Home Page Test', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    //login to site
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('test');
    await page.locator('#loginpassword').fill('123');
    await page.locator('//button[normalize-space()="Log in"]').click();

    //test something in home page
    //1. verify find all product in web page
    // we can take class atribute becuase all product has same class atribute
    //we can use $$ - to get multiple element in the form of array.
    const products = await page.$$('.hrefch')
    console.log('Product count is: ', products)
    expect(products).toHaveLength(9)

    //logout from site
    await page.locator('#logout2').click()
});

test('Add Product Test', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    //login to site
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('test');
    await page.locator('#loginpassword').fill('123');
    await page.locator('//button[normalize-space()="Log in"]').click();

    //test something in home page
    //1. verify Product is added to cart as alert popup
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.locator('//a[normalize-space()="Add to cart"]').click()

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })


    //logout from site
    await page.locator('#logout2').click()
});