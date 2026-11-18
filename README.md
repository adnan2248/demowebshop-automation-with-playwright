# Demo Web Shop Automation Using Playwright

## Project Overview

This project contains automated UI test scenarios for the [Tricentis Demo Web Shop](https://demowebshop.tricentis.com/) website using Playwright with JavaScript and the Page Object Model (POM) design pattern.

The project covers login validation, customer registration, product search, shopping cart operations, and the checkout process.

## Technologies Used

- JavaScript
- Playwright
- Node.js
- Page Object Model (POM)
- Allure Report
- Playwright HTML Report
- Git and GitHub

## Test Scenarios

### Q1 – Invalid Login

- Navigate to the Demo Web Shop website.
- Open the login page.
- Enter invalid login credentials.
- Verify that the appropriate login error message is displayed.

### Q2 – Register and Add Product to Cart

- Navigate to the registration page.
- Register a new customer.
- Verify successful registration.
- Log in with the registered account.
- Select a product and add it to the shopping cart.
- Verify that the product is added successfully.

### Q3 – Search Product and Complete Checkout

- Search for the Health Book product.
- Select the product and add it to the shopping cart.
- Proceed to checkout.
- Enter the required billing information.
- Select the shipping and payment methods.
- Confirm the order.
- Verify that the order is successfully processed.

## Project Structure

```text
module-10-assignment/
│
├── pages/
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── ProductPage.js
│   └── SearchPage.js
│
├── tests/
│   └── ui/
│       ├── Q1-invalid-login.spec.js
│       ├── Q2-register-cart.spec.js
│       └── Q3-search-checkout.spec.js
│
├── allure-report/
├── allure-results/
├── playwright-report/
├── test-results/
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Prerequisites

Before running the project, make sure you have installed:

- Node.js
- npm
- Git

## Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/adnan2248/demowebshop-automation-with-playwright.git
```

**2. Navigate to the project directory**

```bash
cd demowebshop-automation-with-playwright
```

**3. Install dependencies**

```bash
npm install
```

**4. Install Playwright Chromium browser**

```bash
npx playwright install chromium
```

## Test Execution

### Run all test scenarios

```bash
npm test
```

### Run Q1 – Invalid Login

```bash
npx playwright test tests/ui/Q1-invalid-login.spec.js
```

### Run Q2 – Register and Add Product to Cart

```bash
npx playwright test tests/ui/Q2-register-cart.spec.js
```

### Run Q3 – Search Product and Complete Checkout

```bash
npx playwright test tests/ui/Q3-search-checkout.spec.js
```

### Run tests in headed mode

```bash
npm run test:headed
```

## Test Reports

This project uses both Playwright HTML Report and Allure Report to present test execution results.

### Playwright HTML Report

The HTML report is generated automatically after test execution.

To open the report:

```bash
npm run report:html
```

Alternatively:

```bash
npx playwright show-report
```

### Allure Report

After executing the tests, generate the Allure HTML report:

```bash
npm run report:allure
```

To open the generated report:

```bash
npm run report:allure:open
```

The Allure report provides test execution details, including passed and failed test cases and attached screenshots where available.

## Page Object Model (POM)

The Page Object Model design pattern is used to separate page-specific locators and actions from test scripts.

- **pages/** – Contains page classes, locators, and reusable page methods.
- **tests/ui/** – Contains the individual test scenarios.
- **playwright.config.js** – Contains Playwright test configuration and reporting settings.

This structure improves code reusability, maintainability, and readability.

## GitHub Workflow

Separate branches were maintained for each assignment question:

- `feature/Q1-invalid-login`
- `feature/Q2-register-cart`
- `feature/Q3-search-checkout`

After completing each scenario, the corresponding branch was merged into the `main` branch.

The repository contains the automation source code, configuration files, documentation, and generated HTML reports.

## Repository

GitHub: https://github.com/adnan2248/demowebshop-automation-with-playwright

## Author

Adnan Hossain Ratul