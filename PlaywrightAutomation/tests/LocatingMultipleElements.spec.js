const {test, expect} = require('@playwright/test');

test('LocateMultipleElements', async({page})=>{

    await page.goto('https://demoblaze.com/index.html')
    
    /* 
     //find number of link text in webpage
    const links = await page.$$('a');
    for(const link of links)
    {
        const linktext = await link.textContent(); //textcontent() is same as getText() method in selenium
        console.log(linktext);
    }
    */   

   //list all product name in web page using $$ with xpath
   await page.waitForSelector("//div[@id='tbodyid']//h4/a"); //it will wait for specific element to load
   
   const products = await page.$$("//div[@id='tbodyid']//h4/a")

   for(const product of products)
   {
     const prodName = await product.textContent();
     console.log(prodName);
   }
    
})

