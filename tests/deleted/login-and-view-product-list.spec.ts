// Archived from tests/sauce-demo-product-listing.spec.ts (test case login-and-view-product-list)
import { test, expect } from '../../support/fixtures';

test('Login and verify user is redirected to product listing page', { tag: ["@smoke","@regression","@P0","@login-and-view-product-list"] }, async ({ page, swagLabsPage, listPage }) => {
  await test.step('Open — Navigate to Sauce Demo login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await swagLabsPage.fillUserName(testData.sauceDemo.username);
  });
  await test.step('Fill — Enter password', async () => {
    await swagLabsPage.fillPassword(testData.sauceDemo.password);
  });
  await test.step('Click — Click login button', async () => {
    await swagLabsPage.clickLoginButton();
  });
  await test.step('Assert visible — Verify inventory page is displayed', async () => {
    await listPage.expectProductsVisible();
  });
});
