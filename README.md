# Demo Web Shop Automation Using Playwright

## 1. Project Overview

This project automates three UI test scenarios for the [Tricentis Demo Web Shop](https://demowebshop.tricentis.com/) using Playwright with JavaScript and the Page Object Model (POM) design pattern.

The project covers login validation, customer registration, product search, shopping cart operations, and the complete checkout process.

## 2. Technology Stack

- **Programming Language:** JavaScript
- **Automation Framework:** Playwright
- **Runtime Environment:** Node.js
- **Design Pattern:** Page Object Model (POM)
- **Test Reporting:** Allure Report 3 and Playwright HTML Report
- **Version Control:** Git and GitHub

## 3. Project Structure

```text
module-10-assignment/
│
├── pages/
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── RegisterPage.js
│   └── SearchPage.js
│
├── tests/
│   └── ui/
│       ├── Q1-invalid-login.spec.js
│       ├── Q2-register-cart.spec.js
│       └── Q3-search-checkout.spec.js
│
├── allure-report/
├── playwright-report/
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## 4. Test Scenarios

### Q1 – Verify Login with Invalid Credentials

- Navigate to the Demo Web Shop website.
- Open the login page.
- Enter invalid email and password.
- Click the Login button.
- Verify that the appropriate login error message is displayed.

### Q2 – Register a New Customer and Add Product to Cart

- Navigate to the registration page.
- Enter new customer information.
- Complete the registration process.
- Log in with the registered customer account.
- Select a product and add it to the shopping cart.
- Verify that the product is successfully added to the cart.

### Q3 – Search Health Book and Complete Checkout

- Navigate to the Demo Web Shop website.
- Search for the Health Book product.
- Open the product details page.
- Set the product quantity to 2.
- Add the product to the shopping cart.
- Verify the product name and quantity in the shopping cart.
- Accept the terms and conditions.
- Proceed to checkout as a guest.
- Enter the billing address using Bangladesh as the country.
- Continue with the selected shipping address.
- Select Ground shipping.
- Select Cash on Delivery as the payment method.
- Continue through payment information.
- Confirm the order.
- Verify the successful order confirmation and order number.

## 5. Prerequisites

Install the following before running the project:

- Node.js
- npm
- Git

## 6. Installation and Setup

### Step 1 – Clone the Repository

```bash
git clone https://github.com/adnan2248/demowebshop-automation-with-playwright.git
```

### Step 2 – Navigate to the Project Directory

```bash
cd demowebshop-automation-with-playwright
```

### Step 3 – Install Dependencies

```bash
npm install
```

### Step 4 – Install Playwright Chromium

```bash
npx playwright install chromium
```

## 7. Test Execution

### Run All Three Test Scenarios

```bash
npm test
```

### Run Q1 – Invalid Login

```bash
npx playwright test tests/ui/Q1-invalid-login.spec.js
```

### Run Q2 – Registration and Shopping Cart

```bash
npx playwright test tests/ui/Q2-register-cart.spec.js
```

### Run Q3 – Health Book Search and Checkout

```bash
npx playwright test tests/ui/Q3-search-checkout.spec.js
```

### Run Tests in Headed Mode

```bash
npm run test:headed
```

Each scenario can be executed independently, while all three scenarios can also be executed together.

## 8. Test Reporting

The project uses two reporting systems to provide detailed test execution results.

### 8.1 Playwright HTML Report

The Playwright HTML report is generated automatically after test execution.

To open the report:

```bash
npm run report:html
```

Alternatively:

```bash
npx playwright show-report
```

The report provides:
- Test execution summary
- Passed and failed test cases
- Error details
- Screenshots for failed tests
- Execution traces where available

### 8.2 Allure Report

Allure Playwright integration collects test execution results and attachments.

**Generate the Allure HTML Report:**

```bash
npm run report:allure
```

**Open the Allure Report:**

```bash
npm run report:allure:open
```

The Allure report provides:
- Test execution overview
- Individual test case results
- Passed and failed test details
- Attached screenshots
- Test execution information

Both generated HTML reports are included in the GitHub repository for review.

## 9. Page Object Model (POM)

The Page Object Model design pattern is implemented to separate page-specific locators and reusable actions from test scripts.

- **pages/** – Contains page classes, locators, and reusable methods.
- **tests/ui/** – Contains the three independent Playwright test scenarios.
- **playwright.config.js** – Contains test execution settings, browser configuration, and reporter configuration.

This approach improves code reusability, readability, and maintainability.

## 10. GitHub Workflow

Separate feature branches were maintained for each assignment question:

- `feature/Q1-invalid-login`
- `feature/Q2-register-cart`
- `feature/Q3-search-checkout`

Each question was developed and committed separately, then merged into the main branch.

The GitHub repository contains the automation source code, configuration files, documentation, and generated HTML reports.

## 11. GitHub Repository

**Repository:**  
https://github.com/adnan2248/demowebshop-automation-with-playwright

## 12. Author

**Adnan Hossain Ratul**