describe('Go to forgot password page', { testIsolation: false }, () => {
  it('should show login page', () => {
    const url = new URL(window.location.href)
    const protocol = url.protocol
    const hostname = url.hostname

    // Set the default port number and check if it's overridden by an environment variable
    const defaultPort = 4000 // Replace with your project's default port
    const portNumber = Cypress.env('PORT') || defaultPort

    const dynamicUrl = `${protocol}//${hostname}:${portNumber}/login`

    cy.visit(dynamicUrl)
    cy.wait(2000)

    cy.get('#email').type('dhrutidave147@gmail.com')
    cy.get('#password').type('Abcd@123')
    cy.get('#show-password-icon').click()
    cy.wait(1000)
    cy.get('#show-password-icon').click()
    cy.wait(1000)

    cy.get('#login').click()
    cy.wait(2000)

    cy.get('#forgot-password').click()
    cy.wait(2000)
  })

  it('should show forgot password page', () => {
    cy.get('#email').type('dhrutidave147@gmail.com')
    cy.wait(1000)

    cy.get('#send-reset-code-button').click()
    cy.wait(2000)
  })

  it('should show verify your email page', () => {
    // cy.get('#skip-for-now').click()
    cy.wait(2000)

    cy.get('[aria-label="Please enter OTP character 1"]').type('1')

    cy.get('[aria-label="Please enter OTP character 2"]').type('2')

    cy.get('[aria-label="Please enter OTP character 3"]').type('3')

    cy.get('[aria-label="Please enter OTP character 4"]').type('4')

    cy.get('[aria-label="Please enter OTP character 5"]').type('5')

    cy.get('[aria-label="Please enter OTP character 6"]').type('6')

    // cy.get('#skip-for-now').click()
    // cy.wait(2000)
  })

  it('should show reset password  page', () => {
    cy.get('#set-new-password-button').click()
    cy.wait(2000)

    cy.get('#reset-password-new-password').type('Abc@2332')
    cy.wait(2000)
    cy.get('#show-new-password').click()
    cy.wait(2000)
    cy.get('#reset-password-new-password').clear()
    cy.wait(2000)
    cy.get('#reset-password-new-password').type('Abc2332')
    cy.wait(2000)
    cy.get('#reset-password-new-password').clear()
    cy.wait(2000)
    cy.get('#reset-password-new-password').type('Admin@123')
    cy.wait(2000)

    cy.get('#reset-password-confirm-password').type('Abc@2332')
    cy.wait(2000)
    cy.get('#show-new-confirm-password').click()
    cy.wait(2000)
    cy.get('#reset-password-confirm-password').clear()
    cy.wait(2000)
    cy.get('#reset-password-confirm-password').type('Abc2332')
    cy.wait(2000)
    cy.get('#reset-password-confirm-password').clear()
    cy.wait(2000)
    cy.get('#reset-password-confirm-password').type('Admin@123')
    cy.wait(2000)

    cy.get('#set-new-password-button').click()
    cy.wait(2000)

    cy.get('#email').type('dhrutidave147@gmail.com')
    cy.get('#password').type('Admin@123')
    cy.wait(1000)
    cy.get('#show-password-icon').click()
    cy.wait(1000)
    cy.get('#show-password-icon').click()
    cy.wait(1000)

    cy.get('#login').click()
    cy.wait(2000)

    cy.get('#user-dropdown').click()
    cy.wait(1000)
    cy.get('#logout').click()
    cy.wait(1000)
  })
})
