
export class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Billing address
    this.firstNameInput = page.locator('#BillingNewAddress_FirstName');
    this.lastNameInput = page.locator('#BillingNewAddress_LastName');
    this.emailInput = page.locator('#BillingNewAddress_Email');
    this.companyInput = page.locator('#BillingNewAddress_Company');
    this.countryDropdown = page.locator('#BillingNewAddress_CountryId');
    this.cityInput = page.locator('#BillingNewAddress_City');
    this.addressInput = page.locator('#BillingNewAddress_Address1');
    this.zipCodeInput = page.locator('#BillingNewAddress_ZipPostalCode');
    this.phoneInput = page.locator('#BillingNewAddress_PhoneNumber');

    this.billingContinueButton = page.locator(
        '#billing-buttons-container .new-address-next-step-button'
    );
    // Shipping address
this.shippingAddressContinueButton = page
  .getByRole('listitem')
  .filter({
    hasText: 'Select a shipping address from your address book or enter a new address.'
  })
  .getByRole('button', {
    name: 'Continue',
    exact: true
  });

    // Shipping method
    this.groundShipping = page.locator('#shippingoption_0');
    this.shippingContinueButton = page.locator(
      '#shipping-method-buttons-container .button-1'
    );

    // Payment method
    this.cashOnDelivery = page.locator('#paymentmethod_0');
    this.paymentContinueButton = page.locator(
      '#payment-method-buttons-container .button-1'
    );

    // Payment information
    this.paymentInfoContinueButton = page.locator(
      '#payment-info-buttons-container .button-1'
    );

    // Confirm order
    this.confirmOrderButton = page.locator(
      '#confirm-order-buttons-container .button-1'
    );

    

// Order confirmation
this.orderSuccessMessage = page.getByText(
  'Your order has been successfully processed!',
  { exact: true }
);

this.orderNumber = page.locator('li').filter({
  hasText: 'Order number:'
});

this.orderDetailsLink = page.getByRole('link', {
  name: 'Click here for order details.'
});
  }

  async fillBillingAddress(details) {
    await this.firstNameInput.fill(details.firstName);
    await this.lastNameInput.fill(details.lastName);
    await this.emailInput.fill(details.email);
    await this.companyInput.fill(details.company || '');
    await this.countryDropdown.selectOption({ label: details.country });
    await this.cityInput.fill(details.city);
    await this.addressInput.fill(details.address);
    await this.zipCodeInput.fill(details.zipCode);
    await this.phoneInput.fill(details.phone);
  }

 async continueBilling() {
    await this.billingContinueButton.click();
}

  async continueShippingAddress() {
    await this.shippingAddressContinueButton.click();
  }

  async selectGroundShipping() {
    await this.groundShipping.check();
    await this.shippingContinueButton.click();
  }

  async selectCashOnDelivery() {
    await this.cashOnDelivery.check();
    await this.paymentContinueButton.click();
  }

  async continuePaymentInformation() {
    await this.paymentInfoContinueButton.click();
  }

  async confirmOrder() {
    await this.confirmOrderButton.click();
  }

async getOrderNumber() {
  const orderText = await this.orderNumber.innerText();
  return orderText.replace('Order number:', '').trim();
}
}
