// Archived from tests/sauce-demo-product-listing.spec.ts (test case sort-products-low-to-high)
import { test, expect } from '../../support/fixtures';

test('Sort products by Price (Low to High) and verify sorting', { tag: ["@smoke","@regression","@P0","@sort-products-low-to-high"] }, async ({ page, swagLabsPage, inventoryHtmlPage }) => {
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
  await test.step("Select — Select 'Price (low to high)' from sort dropdown", async () => {
    await inventoryHtmlPage.selectNameAToZ2('lohi');
  });
  await test.step('Assert text — Verify first product is lowest price', async () => {
    await inventoryHtmlPage.expectProductsContainsText('$7.99');
  });
});
