
export class ProductPage {

    constructor(page) {
        this.page = page;

        // Category navigation
        this.booksCategory = page.getByRole('link', {
            name: 'Books',
            exact: true
        });

        // Product details
        this.productTitle = page.locator('.product-name h1');

        // Add to cart button
        this.addToCartButton = page.locator(
            'input[id^="add-to-cart-button-"]'
        );

        // Quantity input on product details page
        this.quantityInput = page.locator(
            'input[id$="_EnteredQuantity"]'
        );
    }

    // Navigate to Books category
    async navigateToBooks() {
        await this.booksCategory.first().click();
    }

    // Open selected product
    async selectProduct(productName) {
        await this.page.getByRole('link', {
            name: productName,
            exact: true
        }).click();
    }

    // Add selected product to cart
    async addToCart() {
        await this.addToCartButton.click();
    }

}
