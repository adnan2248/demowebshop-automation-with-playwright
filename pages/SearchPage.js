
export class SearchPage {

    constructor(page) {
        this.page = page;

        // Search elements
        this.searchInput = page.locator('#small-searchterms');
        this.searchButton = page.locator(
            'input.button-1.search-box-button'
        );

        // Search results
        this.searchResults = page.locator('.product-item');
        this.productLink = page.getByRole('link', {
            name: 'Health Book',
            exact: true
        });
    }

    // Search for a product
    async searchProduct(productName) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    // Open Health Book product
    async openHealthBook() {
        await this.productLink.click();
    }

}
