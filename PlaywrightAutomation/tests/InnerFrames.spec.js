const { test, expect } = require('@playwright/test');

test('InnerFrames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');
    //we need to use Frame Object - either name or URL
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    frame3.locator("input[name='mytext3']").fill('Hello Frame3');
  
    //nested frames
    const childframes = await frame3.childFrames();
    //0 indicates the index value of fames(suppose if we have more number of inner frames)
    //chose copy the xpath by right clicking on element
    await childframes[0].locator("//*[@id='i6']/div[3]/div").check();
    await page.waitForTimeout(5000);
});