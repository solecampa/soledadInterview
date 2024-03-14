import { defineConfig, devices } from '@playwright/test';
import { smokeDemoBlaze } from './tests/Projects/smoke-projects.ts';
import { regressionDemoBlaze } from './tests/Projects/regression-projects.ts';
import { functionalDemoBlaze } from './tests/Projects/functional-projects.ts';




export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'], 
    ['html', { outputFolder: 'reports' }] //This would be just to show that we could use more than one reporter if we wanted to */
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    headless:true
  },

  /* Configure projects for major browsers */
  projects: [
    ...smokeDemoBlaze,
    ...regressionDemoBlaze,
    ...functionalDemoBlaze
  ],

});
