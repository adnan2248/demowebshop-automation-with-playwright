
import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage.js';
import { LoginPage } from '../../pages/LoginPage.js';
import { ProductPage } from '../../pages/ProductPage.js';
import { CartPage } from '../../pages/CartPage.js';

test('Q2 - Register a new customer and login', async ({ page }) => {

    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);

    // Generate unique customer details
    const email = `adnan${Date.now()}@gmail.com`;
    const password = 'Test@12345';

    // Navigate to registration page
    await registerPage.navigateToRegister();

    // Register new customer
    await registerPage.registerCustomer(
        'Adnan',
        'Tester',
        email,
        password
    );

    // Verify registration success
    await expect(registerPage.registrationResult)
        .toContainText('Your registration completed');

    // Continue after registration
    await registerPage.continueAfterRegistration();

    // Verify customer is logged in
    await expect(page.locator('a.ico-logout')).toBeVisible();

    // Log out before testing login
    await page.goto('/logout');

    // Navigate to login page
    await loginPage.navigateToLogin();

    // Login using newly registered credentials
    await loginPage.login(email, password);

    // Verify successful login
    await expect(page.locator('a.ico-logout')).toBeVisible();

    // Initialize Product and Cart Page Objects
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

// Navigate to Books category
    await productPage.navigateToBooks();

// Select a product
    await productPage.selectProduct('Computing and Internet');

// Verify selected product
    await expect(productPage.productTitle)
        .toContainText('Computing and Internet');

    // Add product to shopping cart
    await productPage.addToCart();

    // Navigate to shopping cart
    await cartPage.navigateToCart();

    // Verify product name
    await expect(cartPage.productName)
        .toContainText('Computing and Internet');

    // Verify product quantity
    await expect(cartPage.quantityInput).toHaveValue('1');

});
