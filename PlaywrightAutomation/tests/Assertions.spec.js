const {test, expect} = require('@playwright/test');

test('', async({page})=>{

    await page.goto('https://demo.nopcommerce.com/');
    
    /* //1. page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/');
    */

    /* //2. page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title');
    */

   /* //3. page has logo using toBeVisible()
    await expect(page.locator('//img[@alt="nopCommerce demo store"]')).toBeVisible();
    */

    /* //another way to check page has logo using toBeVisible()
    const logo=await page.locator('//img[@alt="nopCommerce demo store"]');
    await expect(logo.toBeVisible());
    */

    /* //4. To check element is enabled or disabled
    await expect(page.locator('//input[@id="small-searchterms"]')).toBeEnabled();
     */
    
    /* //5.expect(locator).toBeChecked() - Radio/Checkbox is checked
    
    */

    /* //6. Element has Attribute or not - expect(locator).toHaveAttribute
    
    */

   /* //7. expect(locator).toHaveText() - Element matches the inner text, text should exact match 
    
    */

   /* //8. expect(locator).toContainText() - Element matches the inner text, text should partial match 
    
    */

    /* //9. expect(locator).toHaveValue() - Input box having value or not
    
    */

     /* //10. expect(locator).toHaveCount() - List of Elements has given length 
    
    */
});