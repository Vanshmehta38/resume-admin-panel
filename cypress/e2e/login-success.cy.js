describe('Go to login page', () => {
  it('should show login page and login', () => {
    const url = new URL(window.location.href)
    const protocol = url.protocol
    const hostname = url.hostname

    // Set the default port number and check if it's overridden by an environment variable
    const defaultPort = 4000 // Replace with your project's default port
    const portNumber = Cypress.env('PORT') || defaultPort

    const dynamicUrl = `${protocol}//${hostname}:${portNumber}/login`

    cy.visit(dynamicUrl)
    cy.wait(2000)

    cy.get('#email').type('dev@optilab.eu')
    cy.get('#password').type('Dev@optilab123')
    cy.wait(1000)

    cy.get('.PrivateSwitchBase-input').click()
    cy.wait(1000)

    cy.get('#login').click()
  })
})
