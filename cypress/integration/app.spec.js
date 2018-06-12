const visit = () => {
  cy.visit("/");
  cy.contains("Form Validation Test");
};

describe("app", () => {
  it("should visit the page", () => {
    visit();
  });

  it("should show required error", () => {
    visit();
    cy.get('button[data-testid="btn"]').click();
    cy.get('div[data-testid="error1"]').contains("Please fill");
  });

  // failing test unexpected when run in the test runner.
  // works fine when running app and testing in real browser.
  // also works fine when manually clicking the submit button in the cypress test runner browser (the red error appears).
  it("should show minLength error", () => {
    visit();
    cy.get('input[data-testid="input1"]').type("a");
    cy.get('button[data-testid="btn"]').click();
    cy.get('div[data-testid="error1"]').contains("Please lengthen this text");
  });

  // passing as expected
  it("should only allow maxLength of 4", () => {
    visit();
    cy.get('input[data-testid="input1"]').type("12345");
    cy.get('button[data-testid="btn"]').click();
    cy.get('input[data-testid="input1"]').should("have.value", "1234");
  });
});
