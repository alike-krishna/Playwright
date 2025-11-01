const { test, expect } = require('@playwright/test');

test('Home Page',async({page})=>{

    await page.goto('https://demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    const pageURL = page.url();
    console.log('Page URL is',pageURL);

    //await page.pause();
     await page.close();
    
})