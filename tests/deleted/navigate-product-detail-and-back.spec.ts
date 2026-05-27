// Archived from tests/sauce-demo-product-listing.spec.ts (test case navigate-product-detail-and-back)
import { test, expect } from '../../support/fixtures';

test('Navigate to product detail page and back to product listing', { tag: ["@smoke","@regression","@P0","@navigate-product-detail-and-back"] }, async ({ page, swagLabsPage, listPage, detailPage }) => {
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
  await test.step('Click — Click on Sauce Labs Backpack product name', async () => {
    await listPage.clickSauceLabsBackpack();
  });
  await test.step('Assert visible — Verify product detail page is displayed', async () => {
    await detailPage.expectAVisible();
  });
  await test.step('Click — Click back to products button', async () => {
    await detailPage.clickBackToProducts();
  });
  await test.step('Assert visible — Verify inventory page is displayed again', async () => {
    await listPage.expectProductsVisible();
  });
});
