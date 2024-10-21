const LoginPage = require('../pages/loginPage');
const { chromium } = require('playwright');
const dotenv = require('dotenv');

dotenv.config();

async function authenticateWithGitHub() {
  const browser = await chromium.launch({ headless: false }); // Use headless: true for CI
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);

  // Step 1: Go to the base URL and select "Sign Up"
  await loginPage.navigateToSignUp();

  // Step 2: Click on "Log in with GitHub"
  await loginPage.clickGitHubLogin();

  // Step 3: Enter GitHub credentials
  const githubUsername = process.env.GITHUB_USER;
  const githubPassword = process.env.GITHUB_PASS;
  await loginPage.enterGitHubCredentials(githubUsername, githubPassword);

  // Step 4: Authorize glitchdotcom app after GitHub login
  //   await loginPage.authorizeGlitch();

  // Step 5: Wait for the redirection to the base URL after authorizing
  await page.waitForURL(process.env.BASE_URL);

  // Step 6: Check for the welcome text and click "Sign Up"
  await loginPage.verifyUsernameAvailable;
  await loginPage.clickSignUpButtonAccount();

  // Step 7: Verify if the notification "Your first notification!" is displayed
  await loginPage.verifyNotification();

  // Save the signed-in state (cookies, local storage, etc.)
  await page.context().storageState({ path: './setup/storage-state.json' });

  await browser.close();
}

module.exports = {
  authenticateWithGitHub,
};
