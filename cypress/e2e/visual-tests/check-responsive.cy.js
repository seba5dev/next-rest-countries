describe("test responsive on mobile and desktop", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should check the mobile version", () => {
    cy.viewport("iphone-x");
    cy.get("nav").should("be.visible");
    cy.get("nav a").should("have.text", "Where in the world?");
    cy.get("nav button").should("have.text", "Dark Mode");
    cy.get("input").should("be.visible");
    cy.get("select").should("be.visible");
    cy.get(".card-title").first().click();
    cy.url().should("include", "/country/");
    cy.get("h1").should("have.text", "Turks and Caicos Islands");
    cy.get("a").contains("Back").click();
    cy.url().should("not.include", "/country/");
  });

  it("should check the desktop version", () => {
    cy.viewport("macbook-15");
    cy.get("nav").should("be.visible");
    cy.get("nav a").should("have.text", "Where in the world?");
    cy.get("nav button").should("have.text", "Dark Mode");
    cy.get("input").should("be.visible");
    cy.get("select").should("be.visible");
    cy.get(".card-title").first().click();
    cy.url().should("include", "/country/");
    cy.get("h1").should("have.text", "Turks and Caicos Islands");
    cy.get("a").contains("Back").click();
    cy.url().should("not.include", "/country/");
  });

  it("should check the tablet version", () => {
    cy.viewport("ipad-2");
    cy.get("nav").should("be.visible");
    cy.get("nav a").should("have.text", "Where in the world?");
    cy.get("nav button").should("have.text", "Dark Mode");
    cy.get("input").should("be.visible");
    cy.get("select").should("be.visible");
    cy.get(".card-title").first().click();
    cy.url().should("include", "/country/");
    cy.get("h1").should("have.text", "Turks and Caicos Islands");
    cy.get("a").contains("Back").click();
    cy.url().should("not.include", "/country/");
  });
});
