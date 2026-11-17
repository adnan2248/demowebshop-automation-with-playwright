
export class RegisterPage {

    constructor(page) {
        this.page = page;

        // Gender selection
        this.maleGender = page.locator('#gender-male');
        this.femaleGender = page.locator('#gender-female');

        // Registration form fields
        this.firstNameInput = page.locator('#FirstName');
        this.lastNameInput = page.locator('#LastName');
        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.confirmPasswordInput = page.locator('#ConfirmPassword');

        // Register button
        this.registerButton = page.locator('#register-button');

        // Registration result
        this.registrationResult = page.locator('.result');
        this.continueButton = page.locator('.register-continue-button');
    }

    // Navigate to registration page
    async navigateToRegister() {
        await this.page.goto('/register');
    }

    // Register a new customer
    async registerCustomer(firstName, lastName, email, password) {

        await this.maleGender.check();

        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);

        await this.registerButton.click();
    }

    // Get registration confirmation message
    async getRegistrationMessage() {
        return await this.registrationResult.innerText();
    }

    async continueAfterRegistration() {
    await this.continueButton.click();
}

}
