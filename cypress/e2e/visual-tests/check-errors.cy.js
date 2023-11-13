describe("test errors on country details page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show countries not found if rest countries api is down", () => {
    cy.intercept(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2",
      {
        statusCode: 500,
      },
    );
    cy.visit("http://localhost:3000");
    cy.get(".country-not-found").should("include.text", "No countries found");
  });

  it("should show if country is not found", () => {
    cy.visit("http://localhost:3000/country/error");
    cy.get(".country-not-found").should("have.text", "Country not found");
  });

  it("should show country not found if rest countries api is down", () => {
    cy.intercept(
      "https://restcountries.com/v3.1/alpha/CO?fields=name,tld,cca2,currencies,capital,region,subregion,languages,population,flags,borders",
      {
        statusCode: 500,
      },
      );
      cy.visit("http://localhost:3000/country/CO");
    cy.get(".country-not-found").should("include.text", "Country not found");
  });
});
