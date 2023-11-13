describe("test errors on country details page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should check if the country data exists", () => {
    cy.visit("http://localhost:3000/country/error");
    cy.get(".country-not-found").should("have.text", "Country not found");
  });
});
