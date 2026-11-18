# Demo Web Shop Automation & API Testing

An end-to-end UI and API automation project developed as part of a Software Quality Assurance (SQA) assignment.

The project automates customer workflows on the [Tricentis Demo Web Shop](https://demowebshop.tricentis.com/) using **Playwright with JavaScript and the Page Object Model (POM)** design pattern. It also performs REST API testing using **Postman and Newman**.

---

## Project Overview

This project is divided into three major parts:

| Part | Description | Tools |
|---|---|---|
| Part A | UI Test Automation | Playwright, JavaScript, POM |
| Part B | Version Control & GitHub Workflow | Git, GitHub, Feature Branches, Pull Requests |
| Part C | API Test Automation | Postman, Newman |

**Application Under Test:** https://demowebshop.tricentis.com/

**API Under Test:** https://jsonplaceholder.typicode.com/users

---

## Technology Stack

| Technology | Purpose |
|---|---|
| JavaScript | Programming language |
| Node.js & npm | Runtime environment and package management |
| Playwright | UI test automation |
| Page Object Model (POM) | Test architecture and maintainability |
| Postman | API request creation and validation |
| Newman | Command-line API test execution |
| Newman HTML Extra | API test reporting |
| Allure | UI test reporting |
| Playwright HTML Reporter | UI test reporting |
| Git & GitHub | Version control and collaboration |

---

# Part A – UI Test Automation

UI automation is implemented using Playwright with JavaScript and the Page Object Model (POM) design pattern.

### Test Scenarios

#### Q1 – Invalid Login

**Objective:** Verify that users cannot log in with invalid credentials.

Test steps:
1. Navigate to the login page.
2. Enter an invalid email address and password.
3. Submit the login form.
4. Verify that the appropriate error message is displayed.
5. Verify that the user is not logged in.

#### Q2 – Register and Add Product to Cart

**Objective:** Verify the customer registration and shopping cart workflow.

Test steps:
1. Register a new customer account.
2. Log in using the registered account.
3. Navigate to a product category.
4. Select a product.
5. Add the product to the shopping cart.
6. Verify that the correct product and quantity appear in the cart.

#### Q3 – Product Search and Complete Checkout

**Objective:** Verify the complete product search and checkout workflow.

Test steps:
1. Search for the product **Health Book**.
2. Verify that the correct product appears in the search results.
3. Open the product details page.
4. Increase the product quantity to two.
5. Add the product to the shopping cart.
6. Accept the terms and conditions.
7. Proceed to checkout as a guest.
8. Complete the billing and shipping information.
9. Select a shipping method and payment method.
10. Confirm the order.
11. Verify the successful order confirmation and order details.

### UI Project Structure

```text
pages/
├── CartPage.js
├── CheckoutPage.js
├── ProductPage.js
└── SearchPage.js

tests/
└── ui/
    ├── Q1-invalid-login.spec.js
    ├── Q2-register-cart.spec.js
    └── Q3-search-checkout.spec.js

playwright.config.js
```

### Running UI Tests

Run all UI tests:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Run individual test scenarios:

```bash
npx playwright test tests/ui/Q1-invalid-login.spec.js
```

```bash
npx playwright test tests/ui/Q2-register-cart.spec.js
```

```bash
npx playwright test tests/ui/Q3-search-checkout.spec.js
```

### UI Test Reports

The project is configured to generate Playwright HTML and Allure reports.

**1. Playwright HTML Report**

Open the generated HTML report:

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

Open the report:

```bash
npm run report:allure:open
```

Report directory:

```text
allure-report/
```

Screenshots are configured to be captured on test failure, and traces are retained on failure through the Playwright configuration.

---

# Part B – GitHub Workflow

The project uses a feature-branch workflow to organize development and maintain a clear version-control history.

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

### Git Workflow

The following workflow was followed:

1. Created separate feature branches for assignment tasks.
2. Developed and tested the automation scenarios.
3. Committed changes using meaningful commit messages.
4. Pushed feature branches to GitHub.
5. Created pull requests for completed work.
6. Merged completed changes into the main branch.
7. Verified the final project in the main branch.

### GitHub Repository

**Repository:** [Demo Web Shop Automation & API Testing](https://github.com/adnan2248/demowebshop-automation-with-playwright-and-typicode-api-testing)

The public repository contains the automation source code, API collection, project documentation, and generated test reports.

---

# Part C – API Test Automation

API automation is implemented using Postman and Newman against the JSONPlaceholder REST API.

**Base URL:**

```text
https://jsonplaceholder.typicode.com/users
```

### API Test Scenarios

#### Request 1 – GET All Users

**Method:** `GET`

**Endpoint:**

```http
GET https://jsonplaceholder.typicode.com/users
```

**Validations:**

1. Verify that the response status code is `200`.
2. Verify that the response body is a non-empty array.
3. Verify that the response contains user information.
4. Verify that every user contains:
   - `id`
   - `name`
   - `email`
5. Select a user ID from the GET response.
6. Save the selected ID in a Postman local variable named `userId`.

#### Request 2 – Update User

**Method:** `PUT`

**Endpoint:**

```http
PUT https://jsonplaceholder.typicode.com/users/{{userId}}
```

The user ID is dynamically retrieved from the variable saved during the GET request.

The PUT request updates the following fields:

- Name
- Email
- Company name

**Validations:**

1. Verify that the response status code is `200`.
2. Verify that the returned user ID matches the saved `userId`.
3. Verify that the updated name matches the expected value.
4. Verify that the phone number is not empty.
5. Verify that the updated email matches the expected value.
6. Verify that the updated company name matches the expected value.

Dynamic test data is used for the updated user information.

### API Project Structure

```text
api-tests/
├── api test automation.postman_collection.json
└── reports/
    └── api-report.html
```

### Running API Tests

Execute the Postman collection through Newman:

```bash
npm run test:api
```

This command runs the collection from the command line and generates an HTML report using Newman HTML Extra.

### API HTML Report

Generated report location:

```text
api-tests/reports/api-report.html
```

Open the HTML file in a browser to review the API execution results, requests, response information, and assertions.

**Note:** JSONPlaceholder is a mock REST API. PUT requests return simulated updated data; changes are not permanently stored on the server.

---

# Running All Tests

The project supports sequential execution of both UI and API automation suites.

Run:

```bash
npm run test:all
```

### Execution Order

1. Q1 – Invalid Login
2. Q2 – Register and Add Product to Cart
3. Q3 – Product Search and Complete Checkout
4. Part C – GET All Users and PUT Update User

The Playwright UI tests execute first, followed by the Newman API collection.

Both UI and API reports are generated during execution.

---

# Installation and Setup

### Prerequisites

Install the following tools before running the project:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/) (optional, for viewing or editing the API collection)

### Step 1 – Clone the Repository

```bash
git clone https://github.com/adnan2248/demowebshop-automation-with-playwright-and-typicode-api-testing.git
```

### Step 2 – Navigate to the Project Directory

```bash
cd demowebshop-automation-with-playwright-and-typicode-api-testing
```

### Step 3 – Install Dependencies

```bash
npm install
```

### Step 4 – Install Playwright Chromium

```bash
npx playwright install chromium
```

### Step 5 – Run the Complete Test Suite

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

The following results were recorded during project execution.

### UI Automation Results

| Test Scenario | Status |
|---|---|
| Q1 – Invalid Login | PASSED |
| Q2 – Register and Add Product to Cart | PASSED |
| Q3 – Product Search and Complete Checkout | PASSED |

**Total: 3 UI tests passed.**

### API Automation Results

| API Request | Status |
|---|---|
| GET All Users | PASSED |
| PUT Update User | PASSED |

**Total:**
- API requests executed: 2
- Assertions passed: 9
- Assertions failed: 0

### Combined Execution

Both UI and API suites were executed sequentially using:

```bash
npm run test:all
```

All three UI scenarios and both API requests completed successfully during the recorded test run.

*Note: These are recorded development results. Results may vary during subsequent executions depending on the application and test environment.*

---

# Author

**Adnan Hossain**

GitHub Profile: [adnan2248](https://github.com/adnan2248)

Project Repository: [Demo Web Shop Automation & API Testing](https://github.com/adnan2248/demowebshop-automation-with-playwright-and-typicode-api-testing)

---

**Project Status:** UI Automation, API Automation, GitHub Workflow, and Project Documentation completed.