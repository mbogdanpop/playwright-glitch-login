class LoginPage {
  constructor(page) {
    this.page = page;
    this.signUpButton = 'text="Sign Up"';
    this.githubLoginButton = 'text="Log in with GitHub"';
    this.githubUsernameField = 'input[name="login"]';
    this.githubPasswordField = 'input[name="password"]';
    this.githubSignInButton = 'input[name="commit"]';
    this.authorizeButton = 'button[name="authorize"]';
    this.welcomeText = 'text="Let\'s create your account"';
    this.githubUsernameAvailable = 'text="Your username is available"';
  }

  async navigateToSignUp() {
    await this.page.goto('/'); // Navigate to base URL
    await this.page.click(this.signUpButton); // Click on "Sign Up"
  }

  async clickGitHubLogin() {
    await this.page.click(this.githubLoginButton); // Click on "Log in with GitHub"
  }

  async enterGitHubCredentials(username, password) {
    await this.page.fill(this.githubUsernameField, username); // Fill GitHub username
    await this.page.fill(this.githubPasswordField, password); // Fill GitHub password
    await this.page.click(this.githubSignInButton); // Click GitHub "Sign In"
  }

  async authorizeGlitch() {
    // Wait for and click the "Authorize glitchdotcom" button
    await this.page.waitForSelector(this.authorizeButton);
    await this.page.click(this.authorizeButton);
  }

  async verifyWelcomeText() {
    // Check if "Welcome! Let's create your account" text appears
    await this.page.waitForSelector(this.welcomeText);
  }

  async verifyUsernameAvailable() {
    // Check if "Your username is available" text appears
    await this.page
      .getByLabel("Welcome! Let's create your")
      .getByRole('button', { name: 'Sign Up' })
      .click();
  }

  async clickSignUpButton() {
    // Click on the "Sign Up" button
    await this.page.click(this.signUpButton);
  }

  async clickSignUpButtonAccount() {
    // Click on the "Sign Up" button on Account page
    await this.page.click(this.clickSignUpButtonAccount);
  }
}

module.exports = LoginPage;
