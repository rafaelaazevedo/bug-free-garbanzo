describe('Invalid Login', function () {
  it('Sends invalid credentials', function () {
    cy.get('@config').then((getConfigs) => {
      const username = getConfigs.username
      const password = getConfigs.password
      cy.get('@user').type(username)
      cy.get('@continue').click()
      cy.get('#password').as('pass')
      cy.get('@pass').type(password)
    })
    cy.get('.login__form-action > .button').as('submit')
    cy.get('@submit').click()
    cy.get('.form-input-validation > span').as('warning')
    cy.get('@warning').should('contain', 'Oops, that\'s not the right password. Please try again!')
  })

  it('Sends empty login', function () {
    cy.get('@user').clear()
    cy.get('@continue').click()
    cy.get('.form-input-validation > span').as('warning')
    cy.get('@warning').should('contain', 'Please enter a username or email address.')
  })
})
