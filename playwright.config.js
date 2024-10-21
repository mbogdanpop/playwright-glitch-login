const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  use: {
    baseURL: process.env.BASE_URL || 'https://support.glitch.com/',
  },
  testDir: './src/tests',
  reporter: [['html', { outputFolder: 'playwright-report', open: 'always' }]],
};
