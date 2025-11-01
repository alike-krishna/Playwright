exports.HomePage = class HomePage {
   
    constructor(page) {
      this.page = page;
      //this.productList= '//*[@id="tbodyid"]/div/div/div/h4/a';
      this.productList='#tbodyid > div > div > div > h4 > a';
      this.addToCartbtn='//a[normalize-space()="Add to cart"]';
      this.cart='#cartur'
     }

 
      async addProductToCart(productName) {
    // Wait until products are available in DOM
    await this.page.waitForSelector(this.productList);

    const productList = await this.page.$$(this.productList);
     console.log('--Product Text content--(Home Page): ', productList);
    for (const product of productList) {
      const name = (await product.textContent()).trim();

      if (productName === name) {
        console.log('--Product Text content--(Home Page):: ', name);

        // Ensure the element is still attached before clicking
        await product.waitForElementState('visible');
        await product.click({ force: true });
        break;
      }
    }

    // Register dialog handler BEFORE clicking Add to Cart
    this.page.once('dialog', async dialog => {
      if (dialog.message().includes('added')) {
        await dialog.accept();
      }
    });

    // Ensure Add to Cart button is attached and visible
    await this.page.waitForSelector(`xpath=${this.addToCartbtn}`);
    await this.page.locator(`xpath=${this.addToCartbtn}`).click();
  }

  async gotoCart() {
    await this.page.locator(this.cart).click();
  }
};
