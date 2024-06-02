import simPlans from "@fixture/simPlans.json";

class SimPlans {
  elements = {
    bannerMessage: () =>
      cy.xpath(
        `//span[@class='banner-aframe__heading style-ts-element style-text-shadow h2']`,
        { log: false }
      ),
    headerPlan: (plan: string) =>
      cy.xpath(`//h1[normalize-space()='${plan} SIM Plans']`, { log: false }),
    textDataPlan: (data: string) =>
      cy.xpath(`//span[normalize-space()='${data}']`, { log: false }),
    textDayRenewal: (day: string) =>
      cy.xpath(`//b[normalize-space()='${day}']`, { log: false }),
    buttonBuyNow: () =>
      cy.xpath(`//a[normalize-space()='Buy now']`, { log: false }),
  };
  scenarios = {
    /**
     * Navigate to sim plan via url
     * @param plan - The name of the plan to navigate to
     */
    navigateToSevenDayPlan: (plan: string) => {
      cy.log(`Navigate to ${plan} plan via URL`);
      cy.visit(simPlans[plan].simURL);
      this.elements.bannerMessage().should("be.visible");
      this.elements.headerPlan(simPlans[plan].header).should("be.visible");
    },

    /**
     * Dynamic function of selecting a plan
     * this will redirect to the cart page
     */
    selectPlan: (plan: string, option: number) => {
      cy.log(`Select ${simPlans[plan].plans[option].name} plan`);
      this.elements
        .textDataPlan(simPlans[plan].plans[option].name)
        .should("be.visible");
      this.elements
        .textDayRenewal(simPlans[plan].plans[option].renewal)
        .should("be.visible");
      this.elements.buttonBuyNow().should("be.visible").click();

      cy.url().should("include", simPlans[plan].plans[option].cartURL);
    },
  };
}

export default new SimPlans();
