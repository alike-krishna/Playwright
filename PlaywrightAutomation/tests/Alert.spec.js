const { test, expect } = require('@playwright/test');
//const { assert } = require('console');

test.skip('alert with OK', async ({ page }) => {
    page.goto('https://testautomationpractice.blogspot.com/');

    //before clicking alert window action, need to write dialog window handler
    //for this we need to first enable the alert handling because whenever alert is opened in page, below alert handler will automatically triggered.
    //Enabling  dialog window handler
    page.on('dialog', async dialog => {
        //use the assertion to verify what type of dialog it is..?(3 types of dialog)
        expect(dialog.type()).toContain('alert')  // this is alert type validation
        expect(dialog.message()).toContain('I am an alert box!'); // message inside the alert box
        await dialog.accept(); // this is acceptance for OK button inside the alert box
    })
    //Need to write the xpath for click action of alert button
    await page.click('//button[@id="alertBtn"]');
    await page.waitForTimeout(5000);
    await page.close();
});

test.skip('alert with OK and cancel - confirmation dialog', async ({ page }) => {
    page.goto('https://testautomationpractice.blogspot.com/');
    //Enabling  dialog window handler
    page.on('dialog', async dialog => {
        //use the assertion to validate what type of dialog it is..?(3 types of dialog)
        expect(dialog.type()).toContain('confirm')  // this is confiirm type validation
        expect(dialog.message()).toContain('Press a button!'); // message inside the alert box
        await dialog.accept(); // close by using OK button
        //await dialog.dismiss(); // close by using cancel button
    })
    //Need to write the xpath for click action of alert button
    await page.click('//button[@id="confirmBtn"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);
    await page.close();
});

test.skip('Prompt Dialog', async ({ page }) => {
    page.goto('https://testautomationpractice.blogspot.com/');
    //Enabling  dialog window handler
    page.on('dialog', async dialog => {
        //use the assertion to validate what type of dialog it is..?(3 types of dialog)
        expect(dialog.type()).toContain('prompt')  // this is confiirm type validation
        expect(dialog.message()).toContain('Please enter your name:'); // message inside the alert box
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Krishna'); // closed prompt window with providing value in it.
        //await dialog.dismiss(); // close by using cancel button
    })
    //Need to write the xpath for click action of alert button
    await page.click('//button[@id="promptBtn"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Krishna! How are you today?');
    await page.waitForTimeout(5000);
    await page.close();
});