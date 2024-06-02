import simPlans from "@fixture/simPlans.json";
import _ from "lodash";

class Cart {
  elements = {
    headerDataPlan: (dataPlan: string) =>
      cy.xpath(
        `//h3[@id='product-header-name-desktop' and contains(normalize-space(),'${dataPlan}')]`,
        { log: false }
      ),
    headerAmountDAy: (amountDay: string) =>
      cy.xpath(
        `//h4[@id='product-header-price-desktop' and contains(normalize-space(),'${amountDay}')]`,
        { log: false }
      ),
    textPlanDetails: (detail) =>
      cy.xpath(`//span[normalize-space()='${detail}']`, { log: false }),
    textPlanDetailsNewtwork: (network: string) =>
      cy.xpath(
        `//strong[@class='css-1m2vp2l'][normalize-space()='${network}']`,
        { log: false }
      ),
    textYourOrder: () =>
      cy.xpath(`//h1[normalize-space()='your order']`, { log: false }),
    textYourOrder_Plan: (plan: string) =>
      cy.xpath(
        `//div[@class='css-120lj27']//div//div[@class='css-17w76e']//div[@class='css-1xvcvvf']//div//strong[@class='css-176y7cu'][normalize-space()='${plan}']`,
        { log: false }
      ),
    textYourOrder_Amount: (amount: string) =>
      cy.xpath(
        `//div[@class='css-120lj27']//div//div[@class='css-17w76e']//div[@class='css-1xvcvvf']//div//strong[@class='css-176y7cu'][normalize-space()='${amount}.00']`,
        { log: false }
      ),
    textPayToday: () =>
      cy.xpath(
        `//div[@class='css-120lj27']//div//div[@class='css-17w76e']//div[@class='css-1xvcvvf']//div//span[@class='css-13m7t4a'][normalize-space()='Pay today']`,
        { log: false }
      ),
    textPayToday_Amount: (amount: string) =>
      cy.xpath(
        `//div[@class='css-120lj27']//div//div[@class='css-17w76e']//div[@class='css-1xvcvvf']//div//span[@class='css-13m7t4a'][normalize-space()='${amount}.00']`,
        { log: false }
      ),
    textYourMobileNumber: () =>
      cy.xpath(`//h1[normalize-space()='your mobile number']`, { log: false }),
    tabPickANewNumber: () =>
      cy.xpath(
        `//span[@class='css-15xa8x'][normalize-space()='pick a new number']`,
        { log: false }
      ),
    sectionNumberPicker: () =>
      cy.xpath(`//div[@data-testid='number-picker']`, { log: false }),
    textChooseTypeOfSIM: () =>
      cy.xpath(`//h1[normalize-space()='choose your type of SIM']`, {
        log: false,
      }),
    radiobtnPhysicalSIM: () =>
      cy.xpath(`//input[@value='USIM']`, { log: false }),
    radiobtnESIM: () => cy.xpath(`//input[@value='ESIM']`, { log: false }),
    buttonCheckout: () =>
      cy.xpath(`//a[@data-testid='product-checkout-button']`, { log: false }),

    yourDetails: {
      headerAlreadyWithAmaysim: () =>
        cy.xpath(`//h3[@id='already-with-amaysim-header-name']`, {
          log: false,
        }),
      radiobtnNewCustomer: () =>
        cy.xpath(`//input[@data-testid='existing-user-no']`, { log: false }),
      headerAboutYou: () =>
        cy.xpath(`//h3[@id='about-you-header-name']`, { log: false }),
      labelWhatsYourName: () =>
        cy.xpath(
          `//label[@class='css-1voa6x5'][normalize-space()="what's your name?"]`,
          { log: false }
        ),
      inputFirstName: () =>
        cy.xpath(`//input[@data-first-name]`, { log: false }),
      inputLastName: () => cy.xpath(`//input[@data-last-name]`, { log: false }),
      labelDateOfBirth: () =>
        cy.xpath(`//label[normalize-space()='date of birth']`, { log: false }),
      inputDateOfBirth: () => cy.xpath(`//input[@data-dob]`, { log: false }),
      labelEmail: () =>
        cy.xpath(`//label[normalize-space()='email address']`, { log: false }),
      inputEmail: () =>
        cy.xpath(`//input[@data-email-address]`, { log: false }),
      labelPassword: () =>
        cy.xpath(`//label[normalize-space()='create a password']`, {
          log: false,
        }),
      inputPassword: () => cy.xpath(`//input[@data-password]`, { log: false }),
      labelContactNumber: () =>
        cy.xpath(`//label[normalize-space()='contact number']`, { log: false }),
      inputContactNumber: () =>
        cy.xpath(`//input[@data-contact-number]`, { log: false }),
      headerDeliveryAddress: () =>
        cy.xpath(`//h3[@id='delivery-address-header-name']`, { log: false }),
      labelHomeWorkAddress: () =>
        cy.xpath(`//label[normalize-space()='home or work address']`, {
          log: false,
        }),
      inputHomeWorkAddress: () =>
        cy.xpath(`//div[@role='combobox']//input`, { log: false }),
      suggestedListAddressOption: (address: string) =>
        cy.xpath(`//span[normalize-space()='${address}']`, { log: false }),
      iconValidAddress: () =>
        cy.xpath(`//div[@class='css-1sts3bo']//div[@class='css-1fyet2d']`, {
          log: false,
        }),
      radiobtnCreditDebitCard: () =>
        cy.xpath(`//input[@data-payment-type='CREDIT_CARDS']`, { log: false }),
      checkboxTermsAndConditions: () =>
        cy.xpath(
          `//input[@data-tnc-checkbox and @name='acceptTermsAndConditions']`,
          { log: false }
        ),
      buttonContinueToPayment: () =>
        cy.xpath(`//button[@data-continue-to-payment-button]`, { log: false }),
      notifPaymentFailedHeader: () =>
        cy.xpath(`//span/strong[contains(.,'Credit Card payment failed')]`, {
          log: false,
        }),
      notifPaymentFailedMessage: () =>
        cy.xpath(
          `//span[contains(text(),'Your attempt to pay via Credit Card has failed. Please ensure you have enough funds and try again or use another credit card.')]`,
          { log: false }
        ),
    },

    securePayment: {
      headerSecurePayment: () =>
        cy.xpath(`//h3[@id='payment-header-name']`, { log: false }),
      labelCardNumber: () =>
        cy.xpath(
          `//label[@id='field-label--1'][normalize-space()='card number']`,
          { log: false }
        ),
      checkboxConfirmCard: () =>
        cy.xpath(`//input[@type='checkbox']`, { log: false }),
      buttonPlaceOrder: () =>
        cy.xpath(`//a[@data-testid='submit-button']`, { log: false }),
    },
  };
  scenarios = {
    /**
     * Validate the details of the plan
     * @param simPlan - The name of the plan to validate
     */
    validatePlanDetails: (simPlan: string, option: number) => {
      cy.log(`Validate ${simPlans[simPlan].plans[option].plan} plan details`);
      this.elements
        .headerDataPlan(simPlans[simPlan].plans[option].plan)
        .should("be.visible");
      this.elements
        .headerAmountDAy(simPlans[simPlan].plans[option].amountDay)
        .should("be.visible");

      simPlans[simPlan].plans[option].planDetails.forEach((detail) => {
        this.elements.textPlanDetails(detail).should("be.visible");
      });
      this.elements
        .textPlanDetailsNewtwork(simPlans[simPlan].plans[option].network)
        .should("be.visible");

      this.elements.textYourOrder().should("be.visible");
      this.elements
        .textYourOrder_Plan(simPlans[simPlan].plans[option].plan)
        .should("be.visible");
      this.elements
        .textYourOrder_Amount(simPlans[simPlan].plans[option].price)
        .should("be.visible");
      this.elements.textPayToday().should("be.visible");
      this.elements
        .textPayToday_Amount(simPlans[simPlan].plans[option].price)
        .should("be.visible");
    },

    /**
     * Pick a new mobile number
     */
    pickANewNumber: () => {
      cy.log("Pick a new number");
      this.elements.textYourMobileNumber().should("be.visible");
      this.elements.tabPickANewNumber().should("be.visible").click();
      this.elements.sectionNumberPicker().should("be.visible");
    },

    /**
     * Checkout with physical SIM
     */
    checkoutPhysicalSIM: () => {
      cy.log("Checkout with physical SIM");
      this.elements.textChooseTypeOfSIM().should("be.visible");
      this.elements
        .radiobtnPhysicalSIM()
        .should("be.visible")
        .should("be.checked");
      this.elements.buttonCheckout().should("be.visible").click();
    },

    /**
     * Purchase a plan as a new customer
     * @param customer - The details of the customer
     */
    newCustomer: (customer: {
      firstName: string;
      lastName: string;
      dateOfBirth: string;
      email: string;
      address: string;
    }) => {
      cy.log("New Customer");
      this.elements.yourDetails.headerAlreadyWithAmaysim().should("be.visible");

      this.elements.yourDetails
        .radiobtnNewCustomer()
        .should("be.visible")
        .should("be.checked");

      this.elements.yourDetails.headerAboutYou().should("be.visible");

      this.elements.yourDetails.labelWhatsYourName().should("be.visible");

      this.elements.yourDetails
        .inputFirstName()
        .should("be.visible")
        .type(customer.firstName);

      this.elements.yourDetails
        .inputLastName()
        .should("be.visible")
        .type(customer.lastName);

      this.elements.yourDetails.labelDateOfBirth().should("be.visible");

      this.elements.yourDetails
        .inputDateOfBirth()
        .should("be.visible")
        .type(customer.dateOfBirth);

      this.elements.yourDetails.labelEmail().should("be.visible");

      this.elements.yourDetails
        .inputEmail()
        .should("be.visible")
        .type(customer.email);

      this.elements.yourDetails.labelPassword().should("be.visible");
      this.elements.yourDetails
        .inputPassword()
        .should("be.visible")
        .type(this.scenarios.generateRandomPassword());

      this.elements.yourDetails.labelContactNumber().should("be.visible");

      this.elements.yourDetails
        .inputContactNumber()
        .should("be.visible")
        .type(`${this.scenarios.generateRandomContactNumber()}`);

      this.elements.yourDetails.headerDeliveryAddress().should("be.visible");

      this.elements.yourDetails.labelHomeWorkAddress().should("be.visible");

      this.elements.yourDetails
        .inputHomeWorkAddress()
        .should("be.visible")
        .type(customer.address);

      this.elements.yourDetails
        .suggestedListAddressOption(customer.address)
        .should("be.visible")
        .click();

      this.elements.yourDetails.iconValidAddress().should("be.visible");

      this.elements.yourDetails
        .radiobtnCreditDebitCard()
        .should("be.visible")
        .should("be.checked");

      this.elements.yourDetails
        .checkboxTermsAndConditions()
        .should("be.visible")
        .click({ force: true })
        .should("be.checked");

      this.elements.yourDetails
        .buttonContinueToPayment()
        .should("be.visible")
        .click();
    },

    /**
     * Failed payment
     * @param invalidCard - The details of the invalid card
     */
    failedPayment: (invalidCard: {
      cardNumber: string;
      expDate: string;
      cvv: number;
    }) => {
      cy.log("Failed Payment");

      this.elements.securePayment.headerSecurePayment().should("be.visible");

      this.elements.securePayment.labelCardNumber().should("be.visible");

      this.elements.securePayment.checkboxConfirmCard().should("be.visible");

      //switching into iFrame by title for card number input
      cy.switchingToiFrames("Secure card number input frame")
        .find(".InputContainer")
        .type(invalidCard.cardNumber);

      //switching into iFrame by title for expiry date input
      cy.switchingToiFrames("Secure expiration date input frame")
        .find(".InputContainer")
        .type(invalidCard.expDate);

      //switching into iFrame by title for security code input
      cy.switchingToiFrames("Secure CVC input frame")
        .find(".InputContainer")
        .type(invalidCard.cvv.toString());

      this.elements.securePayment.checkboxConfirmCard().click({ force: true });

      this.elements.securePayment
        .buttonPlaceOrder()
        .should("be.visible")
        .click();

      this.elements.yourDetails.notifPaymentFailedHeader().should("be.visible");
      this.elements.yourDetails
        .notifPaymentFailedMessage()
        .should("be.visible");

      cy.url().should("include", "/your-details?error=true");
    },

    /**
     * @returns Random password
     */
    generateRandomPassword: () => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const length = _.random(6, 15);
      return _.times(length, () => _.sample(characters)).join("");
    },

    /**
     * @returns Random contact number
     */
    generateRandomContactNumber: () => {
      // The first two digits are fixed as '04'
      const prefix = "04";

      // Generate the remaining 8 digits
      const remainingDigits = _.times(8, () => _.random(0, 9)).join("");

      // Combine the prefix and the random digits
      const contactNumber = prefix + remainingDigits;

      return contactNumber;
    },
  };
}

export default new Cart();
