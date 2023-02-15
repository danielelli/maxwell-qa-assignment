// import the test and expect modules from test library
import { test, expect } from '@playwright/test';

// Test 1: direct to demo account landing page and test if the page displays lender email
test('has lender email', async ({ page }) => {
    // direct to the demo landing page
    await page.goto('https://snap.modernemortgage.com/home/mobile-test/');

    // locate the element that has the lender email to be visible to the user 
    await expect(page.getByRole('link', { name: 'josiah+mobiletest@himaxwell.com' })).toBeVisible();
});

// Test 2: After clicking the "Apply Now" button, expect the page to display the same email as Test 1
test('apply now has lender email', async ({ page }) => {
    // direct to the demo landing page
    await page.goto('https://snap.modernemortgage.com/home/mobile-test/');

    // locate the Apply Now button and click to redirect to apply page 
    await page.getByRole('link', { name: 'Apply Now' }).click();

    // locate the element that has the lender email to be visible to the user
    await expect(page.getByRole('link', { name: 'Mobile' })).toBeVisible();
});
