class Blog {

  elements = {
    endpoint: () => cy.visit("/blog"),
    title: () => cy.get(".post-title"),
    mainImage: () => cy.get(".wp-block-image > img").first()
  }

  visit() {
    this.elements.endpoint()
  }

  getTitle() {
    return this.elements.title()
  }

  getMainImage() {
    return this.elements.mainImage()
  }
}

export const blog = new Blog