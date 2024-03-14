import { devices } from "@playwright/test";


export const regressionDemoBlaze = [
    {
        name: 'regressionOnChrome',
        use: { ...devices['Desktop Chrome'] },
        testDir:'tests/Regression',
        retries: 0
    },
    {
        name: 'regressionOnFirefox',
        use: { ...devices['Desktop Firefox'] },
        testDir:'tests/Regression',
        retries: 0
    },
    {
        name: 'regressionOnSafari',
        use: { ...devices['Desktop Chrome'] },
        testDir:'tests/Regression',
        retries: 0
    },
    {
        name: 'regressionMobileChrome',
        testDir:'tests/Regression',
        use: { ...devices['Pixel 5'] },
        retries: 0
    },
]