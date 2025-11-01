//Usage of built in lactors in playwright 
const {test, expect} = require('@playwright/test');
//import {test, expect} from '@playwright/test'

test('Built-InLocators', async ({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //page.getByAltText() - locate element usullay image , logo of webpage by its text alternative
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible;
    await console.log('Logo name: ',logo);
    
    //page.getByPlaceholder() - locate input by placeholder
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

    //page.getByRole - locate any explicit and implicit element such as button, link, textbox etc..
    await page.getByRole('button',{type: 'submit'}).click() // specify role with any tag name
    
    //page.getByText() - locate the text content of an element ex: after login to orangehrm, username is displayed right corner of page.
    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
    await expect(page.getByText(name)).toBeVisible(); 
    
    //page.getByLabel() : locate form control by associated labels text

    //page.getByTitle(): locate element using title atribute, ex: <title> search it in ctrl+F in developer mode or inspect 
   
    //page.getByTestId(): locate element based on data-testid attribute

});


