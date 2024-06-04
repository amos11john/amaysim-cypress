import simPlans from "@fixture/simPlans.json";

class Home {
  elements = {
    navHome: () => cy.xpath(`//a[@aria-label='Amaysim']`, { log: false }),
    navSIMPlans: () => cy.xpath(`//a[@aria-label='SIM plans']`, { log: false }),
    navlistSIMPlans: (simPlan: string) =>
      cy.xpath(
        `//ul[@class='nav-dropdown-list']//a[contains(text(),'${simPlan}')]`,
        { log: false }
      ),
    bannerImage: () =>
      cy.xpath(
        `//div[@class='banner-aframe vh-50 bg-style-orange button btn-orange btn-shadow af-image-bottom af-image-center title-text-white style-ts-display-large style-pt-large']//div[@class='banner-aframe__content-body']//img`,
        { log: false }
      ),
  };

  scenarios = {
    /**
     * Navigate to home page
     */
    navigateToHome: () => {
      cy.log("Navigate to home page");
      cy.visit("/");
      this.elements.navHome().should("be.visible");
    },

    /**
     * Navigating to a specific SIM plan
     * @param simPlan - The name of the plan to navigate to
     */
    navigateToSimPlan: (simPlan: string) => {
      cy.log(`Navigate to ${simPlan} plan`);
      this.elements.navSIMPlans().should("be.visible");

      cy.xpath(
        `//li//a[@aria-label='SIM plans']//following-sibling::div[@class='nav-dropdown']`,
        { log: false }
      ).invoke("show");

      this.elements
        .navlistSIMPlans(simPlans[simPlan].name)
        .should("be.visible")
        .click();

      cy.url().should("include", simPlans[simPlan].simURL);
    },
  };
}

export default new Home();
