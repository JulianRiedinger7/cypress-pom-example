/// <reference types="Cypress" />

class Login {

  elements = {
    endpoint: () => cy.visit("/practice-test-login"),
    usernameInput: () => cy.get("#username"),
    passwordInput: () => cy.get("#password"),
    submitBtn: () => cy.get("#submit"),
    errorMessage: () => cy.get("#error")
  }

  visit() {
    this.elements.endpoint()
  }

  enterUsername(username) {
    this.elements.usernameInput().type(username)
  }

  enterPassword(password) {
    this.elements.passwordInput().type(password)
  }

  submitLogin() {
    this.elements.submitBtn().click()
  }

  getErrorMessage() {
    return this.elements.errorMessage()
  }
}

export const login = new Login