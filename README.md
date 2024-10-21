# Playwright Glitch Login

This is a Playwright project designed to automate the login process for the Glitch support website using GitHub authentication. It also includes validation steps for the post-login workflow, such as checking for a notification and completing the sign-up process.

## Project Structure

playwright-glitch-login/
│
├── node_modules/ # Node.js modules
├── playwright-report/ # Playwright HTML test reports
├── src/
│ ├── pages/ # Page Object Model (POM) structure for storing page-specific selectors and methods
│ │ └── loginPage.js # Login page selectors and interactions
│ ├── tests/ # Test scripts
│ │ └── loginTest.spec.js # Test file for GitHub login and sign-up process
│ ├── utils/ # Helper functions or utilities
│ │ └── actions.js # Authentication logic and other reusable methods
├── test-results/ # Playwright test result data
├── .env # Environment variables for storing credentials (GitHub username and password)
├── package-lock.json # NPM package lock file
├── package.json # NPM package file
├── playwright.config.js # Playwright configuration file
└── README.md # Project documentation (this file)

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/)
- **Playwright**: Playwright is a testing and browser automation tool. It can be installed with NPM (see below).

## Getting Started

### 1. Clone the Repository

`git clone <your-repo-url>`
`cd playwright-glitch-login`

### 2. Install Dependencies

Install the required dependencies by running:

`npm install`

### 3. Configure Environment Variables

Create a .env file in the root of the project with the following variables. These will store your GitHub credentials for authentication. Make sure that the GitHub account does not have MFA enabled:

`GITHUB_USER=your-github-username`
`GITHUB_PASS=your-github-password`
`BASE_URL=https://support.glitch.com`

### 4. Running Tests

To run the test suite, use the following command:

`npm run test`

This will execute the tests defined in the loginTest.spec.js file, automating the GitHub login process, signing up for the Glitch website, and verifying post-login steps such as checking notifications.

### 5. Viewing Reports

After running the tests, you can generate and view the HTML report by running:

`npx playwright show-report`

This will open a browser and display a detailed report of the test results, including any failures and screenshots.

Test Workflow

The test script performs the following actions:

    1.	Navigates to the Glitch support website.
    2.	Clicks on Sign Up and selects Log in with GitHub.
    3.	Enters GitHub credentials and authorizes the Glitch app.
    4.	Verifies the welcome message: “Let’s create your account”.
    5.	Checks for the message “Your username is available”.
    6.	Completes the sign-up process and verifies the notification “Your first notification!”.

Playwright Configuration

The playwright.config.js file contains the configuration for the Playwright test runner, including the base URL, reporter settings, and storage state.

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
use: {
baseURL: process.env.BASE_URL || 'https://support.glitch.com/',
headless: false, // Set to true for CI environments
storageState: './setup/storage-state.json', // Reuse signed-in state
},
testDir: './src/tests',
reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
};

### 6. Cleaning Up

To clean up and remove any generated files (such as reports or test results):

npm run clean

### License

This project is licensed under the MIT License.
