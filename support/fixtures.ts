import { test as base, expect } from "@playwright/test";
import { CartPage } from "../pageobjects/CartPage";
import { CheckoutCompletePage } from "../pageobjects/CheckoutCompletePage";
import { LoginPage } from "../pageobjects/LoginPage";
import { OverviewPage } from "../pageobjects/OverviewPage";
import { ProductDetailPage } from "../pageobjects/ProductDetailPage";
import { ProductListPage } from "../pageobjects/ProductListPage";
import { SortingPage } from "../pageobjects/SortingPage";

type AppFixtures = {
  cartPage: CartPage;
  checkoutCompletePage: CheckoutCompletePage;
  loginPage: LoginPage;
  overviewPage: OverviewPage;
  productDetailPage: ProductDetailPage;
  productListPage: ProductListPage;
  sortingPage: SortingPage;
};

export const test = base.extend<AppFixtures>({
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  overviewPage: async ({ page }, use) => {
    await use(new OverviewPage(page));
  },
  productDetailPage: async ({ page }, use) => {
    await use(new ProductDetailPage(page));
  },
  productListPage: async ({ page }, use) => {
    await use(new ProductListPage(page));
  },
  sortingPage: async ({ page }, use) => {
    await use(new SortingPage(page));
  },
});

export { expect };
