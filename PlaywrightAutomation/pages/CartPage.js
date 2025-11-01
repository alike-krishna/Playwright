exports.CartPage = class CartPage {
   
    constructor(page) {
      this.page = page;
      this.noOfProducts= '//tbody[@id="tbodyid"]/tr/td[2]'
     
    }

    async checkProductInCart(productName) {
        const productsInCart=await this.page.$$(this.noOfProducts)
        for (const product of productsInCart) {
            const name = (await product.textContent()).trim();
            if (productName === name) {
                return true;
                break;
               }
          }
       return false;
     }
    
 };