const{test, expect}=require('@playwright/test');

test('RadioButton', async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

    //Radio Button - 2 ways - check() method, calling check method with passing locators
    await page.locator("//input[@id='gender-male']").check();
    await page.check("//input[@id='gender-male']");

    //2 ways to use Assertion in radio button that check box is checked or not using ischecked() method, toBeChecked() method
    await expect(await page.locator("//input[@id='gender-male']")).toBeChecked(); 
    const isMaleChecked = await page.locator("//input[@id='gender-male']").isChecked();
    expect(isMaleChecked).toBeTruthy();
    //verify that female radio button is not check marked - negative scenario
    const isFemaleChecked = await page.locator("//input[@id='gender-female']").isChecked();
    expect(isFemaleChecked).toBeFalsy();



})