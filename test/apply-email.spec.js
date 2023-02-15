// import the test and expect modules from test library
import { test, expect } from '@playwright/test';

test('has lender email', async ({ page }) => {
    // direct to the demo landing page
    await page.goto('https://snap.modernemortgage.com/home/mobile-test/');

    // locate the element and expect the lender email to be visible
    await expect(page.getByRole('link', { name: 'josiah+mobiletest@himaxwell.com'})).toBeVisible();
});
