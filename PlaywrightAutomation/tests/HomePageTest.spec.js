const { test, expect } = require('@playwright/test');

test('Home Page',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/');
    const pageURL = page.url();
    console.log('Page URL is',pageURL);

    //await page.pause();
     await page.close();
    
})
