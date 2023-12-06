class LoginSuccesful {

  elements = {
    endpoint: () => cy.visit("/logged-in-successfully"),
    title: () => cy.get(".post-title"),
    logoutBtn: () => cy.contains("Log out")
  }

  visit() {
    this.elements.endpoint()
  }

  getTitle() {
    return this.elements.title()
  }

  getLogoutBtn() {
    return this.elements.logoutBtn()
  }
}

export const loginSuccesful = new LoginSuccesful 