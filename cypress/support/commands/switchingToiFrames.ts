export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * This custom command is used to switch inside the iframe using the id attribute
       * @param id id of iframe
       */
      switchingToiFrames: typeof switchingToiFrames;
    }
  }
}

const switchingToiFrames = (title: string) => {
  return cy
    .get(`iframe[title='${title}']`)
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap);
};

Cypress.Commands.add("switchingToiFrames", switchingToiFrames);
