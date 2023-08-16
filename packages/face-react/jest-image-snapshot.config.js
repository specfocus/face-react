/*
 * A common config for all the child packages.
 * It could be used in two ways:
 * 1) as a symlink
 * 2) as a POJO spread
 */
module.exports = {
  preset: 'jest-puppeteer',
  rootDir: './',
  testMatch: [
    '<rootDir>/src/**/*.test.visual.js'
  ],
  testTimeout: 30000,
  setupFilesAfterEnv: ['<rootDir>/setup-visual-tests.js']
};
