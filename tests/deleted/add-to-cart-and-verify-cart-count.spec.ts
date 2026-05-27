// Archived from tests/sauce-demo-product-listing.spec.ts (test case add-to-cart-and-verify-cart-count)
import { test, expect } from '../../support/fixtures';

test('Add product to cart and verify cart icon updates', { tag: ["@smoke","@regression","@P0","@add-to-cart-and-verify-cart-count"] }, async ({ page, swagLabsPage, listPage }) => {
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
  await test.step("Click — Click 'Add to cart' for Sauce Labs Backpack", async () => {
    await listPage.clickAddToCartSauceLabsBackpack();
  });
  await test.step('Assert text — Verify cart icon shows 1 item', async () => {

    await listPage.expectProductsContainsText('1');
  });
});
