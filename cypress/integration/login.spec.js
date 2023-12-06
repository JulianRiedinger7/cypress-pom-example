import { login } from "../support/pages/Login"
import { loginSuccesful } from "../support/pages/LoginSuccessful";

describe("User Login Suite", () => {
  beforeEach(() => {
    login.visit()
  });
  
  it("should login with correct credentials", () => {
    cy.fixture("credentials").then(credentials => {
      const validCredentials = credentials.validCredentials

      login.enterUsername(validCredentials.username)
      login.enterPassword(validCredentials.password)
      login.submitLogin()

      cy.url().should("contain", "/logged-in-successfully")
      loginSuccesful.getTitle().should("be.visible")
      loginSuccesful.getTitle().should("contain.text", "Logged In Successfully")
      loginSuccesful.getLogoutBtn().should("be.visible")
    })
  })

  it("should show incorrect username message", () => {
    cy.fixture("credentials").then(credentials => {
      const invalidUsername = credentials.invalidUsername

      login.enterUsername(invalidUsername.username)
      login.enterPassword(invalidUsername.password)
      login.submitLogin()

      cy.url().should("not.contain", "/logged-in-successfully")
      login.getErrorMessage().should("be.visible")
      login.getErrorMessage().should("contain.text", "Your username is invalid!")
    })
  });

  it("should show incorrect password message", () => {
    cy.fixture("credentials").then(credentials => {
      const invalidPassword = credentials.invalidPassword

      login.enterUsername(invalidPassword.username)
      login.enterPassword(invalidPassword.password)
      login.submitLogin()

      cy.url().should("not.contain", "/logged-in-successfully")
      login.getErrorMessage().should("be.visible")
      login.getErrorMessage().should("contain.text", "Your password is invalid!")
    })
  });
})