const { test, expect } = require('@playwright/test');

//aproach 1: using frame name or frame url
test.skip('Frame_Name_URL', async({page})=>{
    page.goto('https://ui.vision/demo/webtest/frames/');
    //find totla number of frames in page
    const allframe = await page.frames();
    console.log("Total numner of frames in page: ",allframe.length);

    //using frame name or frame url
    const frameName = await page.frame('name'); //if name is present
    const frameURL = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frameURL.fill("[name='mytext1']",'Hello Frame1');
    await page.waitForTimeout(5000);
    await page.close();
});

//aproach 2: using frame locator(we can capture the frame and pass the value into input box)
test('Frame_Locators', async({page})=>{
    page.goto('https://ui.vision/demo/webtest/frames/');
    //find totla number of frames in page
    const allframe = await page.frames();
    console.log("Total numner of frames in page: ",allframe.length);

    //using frame locator(not able to use name or url only locator)
    const frmaloc = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");//framelocator name and locator of textbnox
    await frmaloc.fill('Hello Frame1');
    await page.waitForTimeout(5000);
    await page.close();
}); 