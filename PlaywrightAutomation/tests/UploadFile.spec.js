const { test, expect } = require('@playwright/test')

test.skip('Single Upload File',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForSelector('#singleFileInput');
    await page.locator('#singleFileInput').click();
    
    await page.locator('#singleFileInput').setInputFiles('tests/UploadFiles/testfile1.csv');

    await page.waitForTimeout(5000);
    await page.close();

})

test('Multiple Upload File',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForSelector('#multipleFilesInput');
    await page.locator('#multipleFilesInput').click();

    await page.locator('#multipleFilesInput').setInputFiles(['tests/UploadFiles/testfile1.csv','tests/UploadFiles/testfile2.csv']);

    await page.waitForTimeout(5000);
    await page.close();

})