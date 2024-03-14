import { devices } from "@playwright/test";

export const smokeDemoBlaze = [
    {
        name: 'smokeOnChrome',
        use: { ...devices['Desktop Chrome'] },
        testDir:'tests/Smoke',
        retries: 0
    },
/*     {
        name: 'smokeOnFirefox',
        use: { ...devices['Desktop Chrome'] },
        testDir:'tests/Smoke',
        retries: 0
    },
    {
        name: 'smokeOnSafari',
        use: { ...devices['Desktop Chrome'] },
        testDir:'tests/Smoke',
        retries: 0
    },
    {
        name: 'smokeMobileChrome',
        testDir:'tests/Smoke',
        use: { ...devices['Pixel 5'] },
        retries:0
    }, */

]