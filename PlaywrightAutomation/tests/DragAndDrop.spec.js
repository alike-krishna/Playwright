const {test, expect}= require('@playwright/test')

test ('Drag And Drop', async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')

   const srcdrag=await page.locator('#draggable')
   const targetdrop=await page.locator('#droppable')

   //Appraoch 1
   await srcdrag.hover()
   await page.mouse.down()

   await targetdrop.hover()
   await page.mouse.up()

    //Appraoch 2
    //await srcdrag.dragTo(targetdrop)

    
   await page.waitForTimeout(5000)

})