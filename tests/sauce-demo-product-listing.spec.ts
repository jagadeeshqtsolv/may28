import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('Login and verify user is redirected to product listing page', { tag: ["@smoke","@regression","@P0","@login-and-view-product-list"] }, async ({ page, loginPage, productListPage }) => {
  await test.step('Open — Navigate to Sauce Demo login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.auth.username);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.auth.password);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Assert visible — Verify inventory page is displayed', async () => {
    await productListPage.expectProductsVisible();
  });
});

test('Verify product listing displays name, price, description, and image', { tag: ["@smoke","@regression","@P0","@verify-product-listing-details"] }, async ({ page, loginPage, productListPage }) => {
  await test.step('Open — Navigate to Sauce Demo login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.auth.username);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.auth.password);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Assert visible — Verify product name is visible', async () => {
    await productListPage.expectSauceLabsBackpackVisible();
  });
  await test.step('Assert visible — Verify product price is visible', async () => {
    await productListPage.expectAddToCartSauceLabsBackpackVisible();
  });
  await test.step('Assert visible — Verify product description is visible', async () => {
    await productListPage.expectSauceLabsBackpackContainsText('Backpack');
  });
  await test.step('Assert visible — Verify product image is visible', async () => {
    await productListPage.expectItem4ImgVisible();
  });
});

test('Sort products by Price (Low to High) and verify order', { tag: ["@smoke","@regression","@P0","@sort-products-low-to-high"] }, async ({ page, loginPage, productListPage, sortingPage }) => {
  await test.step('Open — Navigate to Sauce Demo login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.auth.username);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.auth.password);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Select — Select \'Price (low to high)\' from sort dropdown', async () => {
    await productListPage.selectNameAToZ2('lohi');
  });
  await test.step('Assert text — Verify first product is lowest price', async () => {
    await sortingPage.expectAddToCartSauceLabsOnesieText('$7.99');
  });
});

test('Add product to cart and verify cart icon updates', { tag: ["@smoke","@regression","@P0","@add-to-cart-and-verify-cart-count"] }, async ({ page, loginPage, productListPage, cartPage }) => {
  await test.step('Open — Navigate to Sauce Demo login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.auth.username);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.auth.password);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
    await productListPage.clickAddToCartSauceLabsBackpack();
  });
  await test.step('Assert text — Verify cart icon shows 1 item', async () => {
    await cartPage.expectYourCartText('1');
  });
});

test('Navigate to product detail and back to product listing', { tag: ["@smoke","@regression","@P0","@product-detail-navigation"] }, async ({ page, loginPage, productListPage, productDetailPage }) => {
  await test.step('Open — Navigate to Sauce Demo login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.auth.username);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.auth.password);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Click — Click on Sauce Labs Backpack product name', async () => {
    await productListPage.clickSauceLabsBackpack();
  });
  await test.step('Assert visible — Verify product detail page is displayed', async () => {
    await productDetailPage.expectAddToCartVisible();
  });
  await test.step('Click — Click Back to Products button', async () => {
    await productDetailPage.clickBackToProducts();
  });
  await test.step('Assert visible — Verify inventory page is displayed', async () => {
    await productListPage.expectProductsVisible();
  });
});
