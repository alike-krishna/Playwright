const{test, expect}=require('@playwright/test');

/*
test('Checkbox', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    //Single Checkbox
    await page.locator("//input[1]").check();
    //another approach
    //await page.check("//button[@title='Expand all']");
    
    //Assertions used
    await expect(await page.locator("//input[1]")).toBeChecked();
    //Assertions - another way
    const isChecked = await page.locator("//input[1]").isChecked();
    await expect(isChecked).toBeTruthy(); 

      await page.waitForTimeout(10000);
});
*/
test('MultipleCheckbox', async({page})=>{
    await page.goto('https://demoqa.com/checkbox');
    await page.locator("//button[@title='Expand all']").click();
   
    //Handling Multiple checkbox
     const locatorCheckbox = [
        "//label[@for='tree-node-desktop']//span[@class='rct-checkbox']",
        "//label[@for='tree-node-workspace']//span[@class='rct-checkbox']"
     ];
     for(const elementLocator of locatorCheckbox){
        console.log(await page.locator("//label[@for='tree-node-desktop']//span[@class='rct-checkbox']").isVisible());
        console.log(await page.locator("//label[@for='tree-node-workspace']//span[@class='rct-checkbox']").isVisible());

        await page.locator(elementLocator).check();
     }
      await expect(page.locator("//label[@for='tree-node-desktop']//span[@class='rct-checkbox']")).toBeChecked();
      await expect(page.locator("//label[@for='tree-node-workspace']//span[@class='rct-checkbox']")).toBeChecked();
    
      await page.waitForSelector('.rct-checkbox', { timeout: 1200000 }); 

      //unselect the checkbox, which are already selected
      for(const elementLocator of locatorCheckbox)
        {
        if(await page.locator(elementLocator).isChecked())
            {
                await page.locator(elementLocator).uncheck();
            }
        }
    await expect(page.locator("//label[@for='tree-node-desktop']//span[@class='rct-checkbox']")).not.toBeChecked();
    await expect(page.locator("//label[@for='tree-node-workspace']//span[@class='rct-checkbox']")).not.toBeChecked();
    
    await page.waitForSelector('.rct-checkbox', { timeout: 1200000 }); 
});    