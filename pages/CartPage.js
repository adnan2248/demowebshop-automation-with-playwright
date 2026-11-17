
export class CartPage {

    constructor(page) {
        this.page = page;

        // Shopping cart link
        this.shoppingCartLink = page.getByRole('link', { name: 'Shopping cart',exact: true }); 

        // Cart table
        this.cartItems = page.locator('.cart-item-row');

        // Product name
        this.productName = page.locator('.product a.product-name');

        // Quantity input
        this.quantityInput = page.locator('input.qty-input' );

        // Checkout elements
        this.termsCheckbox = page.locator('#termsofservice');
        this.checkoutButton = page.locator('#checkout');
    }

    // Navigate to shopping cart
    async navigateToCart() {
        await this.shoppingCartLink.click();
    }

    // Get product name from cart
    async getProductName() {
        return await this.productName.innerText();
    }

    // Get product quantity from cart
    async getProductQuantity() {
        return await this.quantityInput.inputValue();
    }

    // Accept terms and conditions
    async acceptTerms() {
        await this.termsCheckbox.check();
    }

    // Proceed to checkout
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

}
