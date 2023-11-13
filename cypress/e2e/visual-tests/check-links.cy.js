describe("test visuals and links", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should check if the navigation bar is visible", () => {
    cy.get("nav").should("be.visible");
    cy.get("nav a").should("have.text", "Where in the world?");
    cy.get("nav button").should("have.text", "Dark Mode");
  });

  it("should check if the dark mode toggle works", () => {
    cy.get("html")
      .invoke("attr", "class")
      .then((classes) => {
        const isDarkModeEnabled = classes.includes("dark");

        cy.get("nav button").click();

        if (isDarkModeEnabled) {
          cy.get("html").should("have.class", "light");
        } else {
          cy.get("html").should("have.class", "dark");
        }
      });
  });

  it("should check if the search bar is visible", () => {
    cy.get("input").should("be.visible");
  });

  it("should check if the region filter is visible", () => {
    cy.get("select").should("be.visible");
  });

  it("should check if the country can be accessed", () => {
    cy.get(".card-title").first().click();
    cy.url().should("include", "/country/");
  });

  it("should check if the country data exists", () => {
    cy.visit("http://localhost:3000/country/CO");
    cy.get("h1").should("have.text", "Colombia");
  });

  it("should check if the back button works", () => {
    cy.get(".card-title").first().click();
    cy.get("a").contains("Back").click();
    cy.url().should("not.include", "/country/");
  });
});
