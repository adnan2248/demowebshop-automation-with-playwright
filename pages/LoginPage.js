
export class LoginPage {

    constructor(page) {
        this.page = page;

        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.loginButton = page.locator('input.button-1.login-button');

        this.errorMessage = page.locator('.validation-summary-errors');
    }

    
    async navigateToLogin() {
        await this.page.goto('/login');
    }

    
    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    
    async getErrorMessage() {
        return await this.errorMessage.innerText();
    }

    
    async isErrorVisible() {
        return await this.errorMessage.isVisible();
    }

}
