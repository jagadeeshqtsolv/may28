import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

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
