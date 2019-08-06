describe("BMI Converter", () => {
  before(function() {
    cy.visit("http://localhost:3000");
  });

  beforeEach(function() {
    cy.reload();
  });

  it('should display "BMI Converter" text on page', () => {
    cy.contains("BMI Converter");
  });

  // 'cy.get()' implements a Chai-jquery call to select/interact with the actual element of the DOM
  // 'cy.contains()' implements a Chai-jquery call to search for rendered content of the DOM
  // modifing functions, such as '.select', or '.type' are called Cypress Commands: https://docs.cypress.io/api/api/table-of-contents.html

  describe("Metric method", () => {
    beforeEach(() => {
      cy.get('select[id="method"]').select("metric");
      cy.get('input[name="weight"]').type("95");
      cy.get('input[name="height"]').type("186");
    });

    it("displays assesment", async () => {
      cy.contains("You are Overweight");
    });

    it("displays BMI value", async () => {
      cy.contains("BMI of 27.46");
    });
  });

  describe("Imperial method", async () => {
    beforeEach(async () => {
      // This before block will be executed prior to each test in this describe block
      cy.get('select[id="method"]').select("imperial");
      cy.get('input[name="weight"]').type("200");
      cy.get('input[name="height"]').type("73");
    });

    it("displays assesment", async () => {
      cy.contains("You are Overweight");
    });

    it("displays BMI value", async () => {
      cy.contains("BMI of 26.38");
    });
  });
});
