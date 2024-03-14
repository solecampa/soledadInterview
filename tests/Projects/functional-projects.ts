import { devices } from "@playwright/test";

export const functionalDemoBlaze = [
    {
       name: 'functionalOnChrome',
        use: { ...devices['Desktop Chrome'] },
        testDir:'tests/Functional',
        retries: 0
    },
    {
        name: 'functionalOnFirefox',
        use: { ...devices['Desktop Firefox'] },
        testDir:'tests/Functional',
        retries: 0
    },
    {
        name: 'functionalOnSafari',
        use: { ...devices['Desktop Chrome'] },
        testDir:'tests/Functional',
        retries: 0
    },
    {
        name: 'functionalMobileChrome',
        testDir:'tests/Functional',
        use: { ...devices['Pixel 5'] },
        retries: 0
    },
]