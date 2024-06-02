import { Home, SimPlans, Cart } from "@functions/index";
import newCustomer from "@fixture/personalDetails.json";
import creditCard from "@fixture/creditCard.json";

describe("Purchase 7 day plan", () => {
  it("failure purchase", function () {
    Home.scenarios.navigateToHome();
    Home.scenarios.navigateToSimPlan("7Day");

    SimPlans.scenarios.selectPlan("7Day", 0);

    Cart.scenarios.validatePlanDetails("7Day", 0);
    Cart.scenarios.pickANewNumber();
    Cart.scenarios.checkoutPhysicalSIM();
    Cart.scenarios.newCustomer(newCustomer);
    Cart.scenarios.failedPayment(creditCard.invalidCard);
  });
});
