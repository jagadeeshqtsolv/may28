// Archived from tests/sauce-demo-product-listing.spec.ts (test case view-product-details)
import { test, expect } from '../../support/fixtures';

test('Verify all product details are visible on product listing page', { tag: ["@smoke","@regression","@P0","@view-product-details"] }, async ({ page, swagLabsPage, listPage }) => {
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
  await test.step('Assert visible — Verify product name is visible', async () => {
    await listPage.expectSauceLabsBackpackVisible();
  });
  await test.step('Assert visible — Verify product price is visible', async () => {

    await listPage.expectSauceLabsBackpackContainsText('$');
  });
  await test.step('Assert visible — Verify product description is visible', async () => {

    await listPage.expectSauceLabsBackpackContainsText('carry.allTheThings');
  });
  await test.step('Assert visible — Verify product image is visible', async () => {
    await listPage.expectItem4ImgVisible();
  });
});
