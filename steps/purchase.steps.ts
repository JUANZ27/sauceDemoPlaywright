import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

When("agrega el producto {string} al carrito", async function (product) {
  this.inventoryPage = new InventoryPage(this.page);
  await this.inventoryPage.addProduct(product);
});

When("visualiza el carrito", async function () {
  await this.inventoryPage.goToCart();
});

When("completa el proceso de checkout con:", async function (table) {
  const data = table.rowsHash();
  this.cartPage = new CartPage(this.page);
  await this.cartPage.proceedToCheckout();

  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.fillInformation(
    data.firstName,
    data.lastName,
    data.zipCode
  );
  await this.checkoutPage.finishPurchase();
});

Then("debería ver la confirmación de compra", async function () {
  const text = await this.checkoutPage.getConfirmationText();
  expect(text).toContain("Thank you");
});