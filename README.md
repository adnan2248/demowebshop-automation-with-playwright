# Demo Web Shop Automation & API Testing

An end-to-end UI and API automation project developed as part of the Software Quality Assurance assignment.

The project automates customer workflows on the Tricentis Demo Web Shop using Playwright with the Page Object Model (POM) design pattern. It also performs API testing using Postman and Newman.

---

## Project Overview

**Website:** https://demowebshop.tricentis.com/

**API:** https://jsonplaceholder.typicode.com/users

This project contains three major parts:

- **Part A – UI Automation:** Automating three end-to-end user scenarios using Playwright.
- **Part B – GitHub Workflow:** Maintaining separate feature branches, meaningful commits, and merging completed work into the main branch.
- **Part C – API Automation:** Testing GET and PUT requests using Postman and executing the collection through Newman.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| JavaScript | Programming language |
| Node.js | Runtime environment |
| Playwright | UI automation framework |
| Page Object Model (POM) | Test architecture |
| Postman | API test automation |
| Newman | Command-line API execution |
| Newman HTML Extra | API HTML reporting |
| Allure | Test reporting |
| Playwright HTML Reporter | UI test reporting |
| Git & GitHub | Version control and collaboration |

---

# Part A – UI Automation

UI automation is implemented using Playwright with the Page Object Model (POM) design pattern.

### Test Scenarios

**Q1 – Invalid Login**

- Navigate to the login page.
- Enter invalid email and password credentials.
- Attempt to log in.
- Verify that the appropriate error message is displayed.
- Verify that the user is not logged in.

**Q2 – Register and Add Product to Cart**

- Register a new customer.
- Log in with the registered account.
- Navigate to a product category.
- Select a product.
- Add the product to the shopping cart.
- Verify the correct product and quantity in the cart.

**Q3 – Product Search and Complete Checkout (End-to-End)**

- Search for Health Book.
- Verify that the correct product appears in search results.
- Open the product.
- Increase the quantity to two.
- Add the product to the shopping cart.
- Accept the terms and conditions.
- Proceed to checkout as a guest.
- Complete the billing and shipping information.
- Select a shipping method and payment method.
- Confirm the order.
- Verify the successful order confirmation and order details.

### UI Project Structure

```text
pages/
    CartPage.js
    CheckoutPage.js
    ProductPage.js
    SearchPage.js

tests/
    ui/
        Q1-invalid-login.spec.js
        Q2-register-cart.spec.js
        Q3-search-checkout.spec.js

playwright.config.js
```

### Run UI Tests Individually

Run Q1:

```bash
npx playwright test tests/ui/Q1-invalid-login.spec.js
```

Run Q2:

```bash
npx playwright test tests/ui/Q2-register-cart.spec.js
```

Run Q3:

```bash
npx playwright test tests/ui/Q3-search-checkout.spec.js
```

### Run All UI Tests

Run all three scenarios sequentially:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

### UI Test Reports

The project generates two types of UI reports:

**1. Playwright HTML Report**

```bash
npm run report:html
```

Report directory:

```text
playwright-report/
```

**2. Allure Report**

Generate the Allure report:

```bash
npm run report:allure
```

Open the generated report:

```bash
npm run report:allure:open
```

Report directory:

```text
allure-report/
```

Screenshots are captured automatically for failed tests and attached to the test reports through the configured reporters.

---

# Part C – API Automation

API automation is implemented using Postman and Newman against the JSONPlaceholder API.

**Base URL:**

https://jsonplaceholder.typicode.com/users

### API Test Scenarios

**Request 1 – GET All Users**

Method: `GET`

Endpoint:

```text
https://jsonplaceholder.typicode.com/users
```

Validations:

- Verify response status code is 200.
- Verify the response is a non-empty array.
- Verify that the response contains user information.
- Verify each user contains an ID, name, and email.
- Select a user ID from the GET response and save it in a local variable.

**Request 2 – Update User**

Method: `PUT`

Endpoint:

```text
https://jsonplaceholder.typicode.com/users/{{userId}}
```

The saved user ID is dynamically used in the endpoint.

The request updates:

- Name
- Email
- Company name

Validations:

- Verify response status code is 200.
- Verify the returned ID matches the saved user ID.
- Verify the updated name matches the expected value.
- Verify the phone number is not empty.
- Verify the updated email.
- Verify the updated company name.

Dynamic test data is generated for the updated user information.

### API Project Structure

```text
api-tests/
    api test automation.postman_collection.json
    reports/
        api-report.html
```

### Run API Tests

Execute the Postman collection using Newman:

```bash
npm run test:api
```

This command executes the collection from the command line and generates an HTML report using Newman HTML Extra.

### API HTML Report

Generated report location:

```text
api-tests/reports/api-report.html
```

Open this file in a browser to view the API execution results, requests, response information, and assertions.

---

# Run All UI and API Tests

The project supports sequential execution of all UI and API test scenarios.

Run:

```bash
npm run test:all
```

Execution order:

1. Q1 – Invalid Login
2. Q2 – Register and Add Product to Cart
3. Q3 – Search Product and Complete Checkout
4. Part C – GET All Users and PUT Update User

The Playwright suite runs first, followed by the Newman API collection.

Both UI and API reports are generated during execution.

---

# Installation and Setup

### Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- Git
- Postman (for viewing or editing the API collection)
- A Chromium-compatible browser installed through Playwright

### Step 1 – Clone the Repository

```bash
git clone https://github.com/adnan2248/demowebshop-automation-with-playwright.git
```

### Step 2 – Navigate to the Project

```bash
cd demowebshop-automation-with-playwright
```

### Step 3 – Install Dependencies

```bash
npm install
```

### Step 4 – Install Playwright Browser

```bash
npx playwright install chromium
```

### Step 5 – Execute the Tests

Run all UI and API tests:

```bash
npm run test:all
```

---

# Available npm Scripts

| Command | Description |
|---|---|
| `npm test` | Run all UI tests |
| `npm run test:headed` | Run UI tests in headed mode |
| `npm run report:html` | Open Playwright HTML report |
| `npm run report:allure` | Generate Allure report |
| `npm run report:allure:open` | Open Allure report |
| `npm run test:api` | Execute API tests using Newman |
| `npm run test:all` | Run all UI and API tests sequentially |

---

# Test Execution Results

The project was successfully executed with the following results during development:

### UI Automation

- Q1 – Invalid Login: PASSED
- Q2 – Register and Add Product to Cart: PASSED
- Q3 – Search Product and Complete Checkout: PASSED

**Total: 3 UI tests passed.**

### API Automation

- GET All Users: PASSED
- PUT Update User: PASSED

**Total: 2 API requests executed successfully.**

**API assertions: 9 passed, 0 failed.**

### Combined Execution

Both UI and API suites were executed sequentially using:

```bash
npm run test:all
```

All three UI scenarios and both API requests completed successfully during the recorded test run.

*Note: These are recorded development results. Test results may vary on subsequent executions.*

---

# Part B – GitHub Workflow

The project follows a feature-branch workflow.

Each question is maintained in a separate branch and merged into the main branch after completion.

### Branch Structure

```text
main
│
├── feature/Q1-invalid-login
│
├── feature/Q2-register-cart
│
├── feature/Q3-search-checkout
│
└── feature/part-c-api-testing
```

### GitHub Repository

**Repository:** 

https://github.com/adnan2248/demowebshop-automation-with-playwright

The repository is public and contains the automation source code, API collection, documentation, and generated HTML reports.

### Git Workflow

The following Git workflow was used:

1. Create a separate feature branch for each assignment question.
2. Develop and test the automation scenarios.
3. Commit changes with meaningful commit messages.
4. Push feature branches to GitHub.
5. Create pull requests to merge completed work into `main`.
6. Verify the merged changes in the main branch.

---

# Author

**Adnan Hossain**

GitHub: https://github.com/adnan2248

Project Repository:

https://github.com/adnan2248/demowebshop-automation-with-playwright

---

**Project Status:** UI Automation, API Automation, GitHub Workflow, and Documentation completed.