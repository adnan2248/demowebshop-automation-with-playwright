
import { test, expect } from '@playwright/test';

import { SearchPage } from '../../pages/SearchPage.js';
import { ProductPage } from '../../pages/ProductPage.js';
import { CartPage } from '../../pages/CartPage.js';
import { CheckoutPage } from '../../pages/CheckoutPage.js';

test('Q3 - Search Health Book and complete checkout', async ({ page }) => {
  const searchPage = new SearchPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Navigate to website
  await page.goto('/');

  // Step 2: Search for Health Book
  await searchPage.searchProduct('Health Book');

  await expect(searchPage.searchResults.first()).toBeVisible();

  // Step 3: Open Health Book
  await searchPage.openHealthBook();

  await expect(page.locator('.product-name h1')).toHaveText('Health Book');

  // Step 4: Increase quantity to 2
  await productPage.setQuantity(2);

  // Step 5: Add product to cart
  await productPage.addToCart();

  // Step 6: Verify shopping cart
  await cartPage.navigateToCart();

  await expect(cartPage.productName).toContainText('Health Book');
  await expect(cartPage.quantityInput).toHaveValue('2');

  // Step 7: Accept terms and proceed to checkout
  await cartPage.acceptTerms();
  await cartPage.proceedToCheckout();

  // Step 8: Checkout as guest
  await page.getByRole('button', {
    name: 'Checkout as Guest'
  }).click();

  // Step 9: Fill billing address
  await checkoutPage.fillBillingAddress({
    firstName: 'Adnan',
    lastName: 'Tester',
    email: `adnan.qa.${Date.now()}@example.com`,
    company: '',
    country: 'Bangladesh',
    city: 'Dhaka',
    address: 'Uttara, Dhaka',
    zipCode: '1230',
    phone: '01700000000'
  });

  await checkoutPage.continueBilling();

  // Step 10: Continue with selected shipping address
  await checkoutPage.continueShippingAddress();

  // Step 11: Select Ground shipping
  await checkoutPage.selectGroundShipping();

  // Step 12: Select Cash on Delivery
  await checkoutPage.selectCashOnDelivery();

  // Step 13: Continue payment information
  await checkoutPage.continuePaymentInformation();

  // Step 14: Confirm order
  await checkoutPage.confirmOrder();

  // Step 15: Verify successful order
  // Verify successful order
// Verify successful order
await expect(checkoutPage.orderSuccessMessage).toBeVisible();

// Verify order number
await expect(checkoutPage.orderNumber).toBeVisible();

// Verify order details link
await expect(checkoutPage.orderDetailsLink).toBeVisible();

// Print order number
console.log(
    'Order Number:',
    await checkoutPage.getOrderNumber()
);
});
