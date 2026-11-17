
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';

test('Q1 - Verify login fails with invalid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    
    await loginPage.navigateToLogin();

    
    await loginPage.login('invaliduser123@gmail.com', 'WrongPassword123');

    
    await expect(loginPage.errorMessage).toBeVisible();

    
    await expect(loginPage.errorMessage).toContainText(
        'Login was unsuccessful. Please correct the errors and try again.'
    );

    await expect(loginPage.errorMessage).toContainText(
        'No customer account found'
    );

    
    await expect(page.locator('a.ico-logout')).not.toBeVisible();

    
    await expect(page.locator('a.ico-login')).toBeVisible();

});
