describe('Go to login page', { testIsolation: false }, () => {
  // ** Login
  it('should show login', () => {
    const url = new URL(window.location.href)
    const protocol = url.protocol
    const hostname = url.hostname

    // Set the default port number and check if it's overridden by an environment variable
    const defaultPort = 4000 // Replace with your project's default port
    const portNumber = Cypress.env('PORT') || defaultPort

    const dynamicUrl = `${protocol}//${hostname}:${portNumber}/login`

    cy.visit(dynamicUrl)
    cy.wait(2000)

    cy.get('#login').click()
    cy.wait(1500)

    cy.get('#email').type('supergmail.com')
    cy.get('#password').type('sup')
    cy.get('#login').click()
    cy.wait(1000)

    cy.get('#email').clear()
    cy.get('#password').clear()
    cy.wait(1000)

    cy.get('#email').type('super001')
    cy.get('#password').type('Abc@223133')
    cy.get('#show-password-icon').click()
    cy.wait(1000)
    cy.get('#show-password-icon').click()
    cy.wait(1000)
    cy.get('#login').click()
    cy.wait(2000)

    cy.get('#email').clear()
    cy.get('#password').clear()
    cy.wait(1000)

    cy.get('#email').type('dev@optilab.eu')
    cy.get('#password').type('Dev@optilab123')
    cy.wait(1000)

    cy.get('.PrivateSwitchBase-input').click()
    cy.wait(1000)

    cy.get('#login').click()
    cy.wait(3000)
  })

  // ** Logout
  it('should show logout', () => {
    cy.get('#user-dropdown').click()
    cy.wait(2000)
    cy.get('#logout').click()
  })
})
