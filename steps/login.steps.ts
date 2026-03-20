import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

Given("el usuario navega a la página de login", async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When("inicia sesión con {string} y {string}", async function (user, pass) {
  await this.loginPage.login(user, pass);
});

Then("debería ver la página de productos", async function () {
  await expect(this.page).toHaveURL(/inventory/);
});

Then("debería ver un mensaje de error", async function () {
  const error = await this.loginPage.getErrorMessage();
  expect(error).toContain("Sorry");
});