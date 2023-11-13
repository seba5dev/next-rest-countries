describe("test functionality of search bar and regions select", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should check if the search bar is working", () => {
    cy.get("input").type("Colombia");
    cy.get(".card-title").should("have.text", "Colombia");
  });

  it("should check if the region filter is working", () => {
    cy.get("select").select("Americas");
    cy.get(".card-title").first().should("not.include.text", "Spain");
  });
});
