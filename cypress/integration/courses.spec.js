import { courses } from "../support/pages/Courses";

describe("Courses navigation Suite", () => {
  beforeEach(() => {
    courses.visit()
  });
  
  it("should be able to see main elements", () => {
    cy.url().should("contain", "/courses")
    courses.getTitle().should("be.visible")
    courses.getTitle().should("contain.text", "Courses")
    courses.getCoursesTitles().should("have.length.greaterThan", 1)
  });
})