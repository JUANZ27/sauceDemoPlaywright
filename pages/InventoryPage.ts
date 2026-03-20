import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addProduct(productName: string) {
    const product = this.page.locator('.inventory_item')
      .filter({ hasText: productName });
    await product.locator('button').click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}