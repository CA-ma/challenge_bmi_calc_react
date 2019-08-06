describe('BMI Converter', () => {
  before(function() {
      cy.visit('http://localhost:3000');
  });

  beforeEach(function() {
      // Reload the application between tests to reset state
      cy.reload();
  });

  it('should display "BMI Converter" text on page', () => {
    cy.contains('BMI Converter');
  });

})