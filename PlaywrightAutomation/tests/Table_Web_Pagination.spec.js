const { test, expect } = require('@playwright/test');
const { assert } = require('console');

test.skip('PaginationTable', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');//find the table ID of pagination table

    //1. write xpath for total number of table rows and columns
    const cols = await table.locator('thead tr th');//using th tags will return number of columns
    console.log('Number of Columns: ', await cols.count());
    expect(await cols.count()).toBe(4);

    const rows = await table.locator('tbody tr');//using th tags will return number of rows
    console.log('Number of Rows: ', await rows.count());
    expect(await rows.count()).toBe(5);

    //2. Select checkbox for product 4 - this is how filter function work
    //we need to follow this approach - 
    //firstly need to get number of rows, then apply filter function
    //inside filter function given 2 filter -  based on td first then among all rows which contain the product 4, finally it will return particuar row
    //then we need to select checkbox
    const matchedRow = rows.filter({
        has: await page.locator('td'),
        hasText: 'Product 4'
    });
    await matchedRow.locator('input[type="checkbox"]').check();

    await page.waitForTimeout(5000);
    await page.close();
});

//3. To select multiple checkbox in pagination table, need to  write reusable function in JS
// we need to write JS async function outside test 

async function selectProduct(rows,page,name) { //all rows, page fixture, name of the product
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    });
     //matchedRow.locator('input').check()
     const checkbox = matchedRow.locator('input[type="checkbox"]');
     await checkbox.check();
}

test.skip('Pagination Table Checkmark Using JSFunction', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');//find the table ID of pagination table

    //write xpath for total number of table rows and columns
    const cols = await table.locator('thead tr th');//using th tags will return number of columns
    console.log('Number of Columns: ', await cols.count());
    expect(await cols.count()).toBe(4);

    const rows = await table.locator('tbody tr');//using th tags will return number of rows
    console.log('Number of Rows: ', await rows.count());
    expect(await rows.count()).toBe(5);

    await selectProduct(rows,page,'Smartphone');
    await selectProduct(rows,page,'Tablet');
    await selectProduct(rows,page,'Wireless Earbuds');

    await page.waitForTimeout(5000);
    await page.close();
});


//4. Print all product deatils uisng loop
test.skip('Pagination Table Print all product Using Loop', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');//find the table ID of pagination table

    //write xpath for total number of table rows and columns
    const cols = await table.locator('thead tr th');//using th tags will return number of columns
    console.log('Number of Columns: ', await cols.count());
    expect(await cols.count()).toBe(4);

    const rows = await table.locator('tbody tr');//using th tags will return number of rows
    console.log('Number of Rows: ', await rows.count());
    expect(await rows.count()).toBe(5);

     //need to  write for loop to read all data from pagination table
    //before getting column data, firstly we need to capture the particular row from multiple rows
    //then get all td from that row then using second for loop(inner loop) 
    for(let i=0;i<await rows.count();i++)
    {
        const row=rows.nth(i);
        const tds=row.locator('td')

        for(let j=0 ;j< await tds.count()-1;j++)
        {
            console.log(await tds.nth(j).textContent())
        }
    }

    await page.waitForTimeout(5000);
    await page.close();
});

//5) read data from all the pages in the table
test('Pagination Table - Read data from all pages Using Loop', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');//find the table ID of pagination table

    //write xpath for total number of table rows and columns
    const cols = await table.locator('thead tr th');//using th tags will return number of columns
    console.log('Number of Columns: ', await cols.count());
    expect(await cols.count()).toBe(4);

    const rows = await table.locator('tbody tr');//using th tags will return number of rows
    console.log('Number of Rows: ', await rows.count());
    expect(await rows.count()).toBe(5);

     

    const pages=await page.locator('.pagination li a') //it will take all pagination count and store it in pages variable
    console.log('Number of pages in the table:', await pages.count())

    for(let p=0 ;p< await pages.count(); p++) //it will loop from 1st page from table until last page 
    {
        if(p>0)//start from pagination page 2
        {
            await pages.nth(p).click()//clicked 2nd page, 3rd page, 4th page
        }
        for(let i=0;i<await rows.count();i++)
        {
            const row=rows.nth(i);
            const tds=row.locator('td')
    
            for(let j=0 ;j< await tds.count()-1;j++)
            {
                console.log(await tds.nth(j).textContent()) //take the text content from pagination grid.
            }
        }
        await page.waitForTimeout(3000);

    }

    await page.waitForTimeout(5000);
    await page.close();
});