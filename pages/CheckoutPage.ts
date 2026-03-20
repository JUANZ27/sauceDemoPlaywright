import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInformation(firstName: string, lastName: string, zip: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', zip);
    await this.page.click('[data-test="continue"]');
  }

  async finishPurchase() {
    await this.page.click('[data-test="finish"]');
  }

  async getConfirmationText() {
    return this.page.locator('.complete-header').textContent();
  }
}