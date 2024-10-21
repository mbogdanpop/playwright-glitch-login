const { test } = require('playwright/test');
const { authenticateWithGitHub } = require('../utils/actions');

test('Log in to Glitch Support using GitHub and complete sign-up', async () => {
  // Perform GitHub authentication and complete the sign-up process
  await authenticateWithGitHub();

  // At this point, the user should be authenticated and the sign-up process completed
  console.log(
    'Successfully authenticated with GitHub, authorized, signed up, and checked notification.'
  );
});
