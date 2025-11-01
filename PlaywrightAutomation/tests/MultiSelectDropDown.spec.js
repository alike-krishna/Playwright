const{test, expect}=require("@playwright/test");

test('Multiselect Dropdown',async({page})=>{
    page.setDefaultNavigationTimeout(60000);
    await page.goto('https://testautomationpractice.blogspot.com/');
 
    //select multiple options from multi select dropdown
    await page.selectOption('#colors',['red','green','yellow']);
    
    //Assertions using expect method
    //1. Check number of options in dropdown
    //const options = await page.locator('#colors option');
    //await expect(options).toHaveCount(5);

    //2. check number of options in dropdown using javascript array concept(using $$ symbol)
    const colourOptions = await page.$$('#colors option');
    console.log("Number of options: ",colourOptions.length);
    await expect(colourOptions.length).toBe(7);

    //Check presence of value in the dropdown using tetxContent() method
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Red')).toBeTruthy();
    await expect(content.includes('Balck')).toBeFalsy();

});