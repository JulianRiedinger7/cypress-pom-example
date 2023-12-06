import { blog } from "../support/pages/Blog";

describe("Blog navigation Suite", () => {
  beforeEach(() => {
    blog.visit()
  });
  
  it("should be able to see main elements", () => {
    cy.url().should("contain", "/blog")
    blog.getTitle().should("be.visible")
    blog.getMainImage().should("be.visible")
  });
  
})