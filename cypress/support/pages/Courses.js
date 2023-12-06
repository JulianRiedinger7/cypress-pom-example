class Courses {

  elements = {
    endpoint: () => cy.visit("/courses"),
    title: () => cy.get(".post-title"),
    coursesTitles: () => cy.get(".wp-block-heading")
  }

  visit() {
    this.elements.endpoint()
  }

  getTitle() {
    return this.elements.title()
  }

  getCoursesTitles() {
    return this.elements.coursesTitles()
  }
}

export const courses = new Courses