describe("BMI Calculator", () => {
  before(function() {
    cy.visit("http://localhost:3000");
  });

  beforeEach(function() {
    cy.reload();
  });

  it('should display "BMI Calculator" text on page', () => {
    cy.contains("BMI Calculator");
  });

  describe("Metric method", () => {
    beforeEach(() => {
      cy.get('select[id="method"]').select("metric");
      cy.get('input[name="weight"]').type("95");
      cy.get('input[name="height"]').type("186");
    });

    it("displays assesment", async () => {
      cy.get('div[id="response"]').should('contain',"You are Overweight");
    });

    it("displays BMI value", async () => {
      cy.get('div[id="response"]').should('contain', "BMI of 27.46");
    });
  });

  describe("Imperial method", () => {
    beforeEach(() => {
      cy.get('select[id="method"]').select("imperial");
      cy.get('input[name="weight"]').type("200");
      cy.get('input[name="height"]').type("73");
    });

    it("displays assesment", () => {
      cy.get('div[id="response"]').should('contain', "You are Overweight");
    });

    it("displays BMI value", () => {
      cy.get('div[id="response"]').should('contain', "BMI of 26.38");
    });
  });
});
