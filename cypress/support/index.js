// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
  cy.clearCookies()
  cy.fixture('config.json').as('config')
  cy.get('@config').then((getConfigs) => {
    const loginPage = getConfigs.loginPage
    cy.visit(loginPage)
  })
  cy.get('#usernameOrEmail').as('user')
  cy.get('.login__form-action > .button').as('continue')
})
