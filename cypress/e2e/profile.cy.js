import './login-success.cy'

describe('Go to profile page', { testIsolation: false }, () => {
  // ** View profile
  it('should show profile page, check validation and update password', () => {
    cy.wait(1000)
    cy.get('#user-dropdown').click()
    cy.wait(1000)
    cy.get('#profile').click()
    cy.wait(1000)

    // ** test case for security component
    // cy.contains('Security').click()
    // cy.wait(2000)

    cy.get('#change-password').click()
    cy.wait(2000)

    cy.get('#profile-view-security-new-password').type('Dev@optilab123')
    cy.wait(2000)

    cy.get('#profile-show-new-password').click()
    cy.wait(2000)

    cy.get('#profile-view-security-confirm-new-password').type('Dev@optilab12')
    cy.wait(2000)

    cy.get('#change-password').click()
    cy.wait(2000)

    cy.get('#profile-show-new-confirm-password').click()
    cy.wait(2000)

    cy.get('#profile-view-security-confirm-new-password').clear()
    cy.wait(1000)
    cy.get('#profile-view-security-confirm-new-password').type('Dev@optilab123')
    cy.wait(2000)

    cy.get('#change-password').click()
    cy.wait(2000)

    cy.get('#edit-button').click()
    cy.wait(2000)
    cy.get('#fname-admin').clear()
    cy.wait(2000)
    cy.get('#fname-admin').type('Country')
    cy.wait(2000)
    cy.get('#lname-admin').clear()
    cy.wait(2000)
    cy.get('#lname-admin').type('Admin')
    cy.wait(2000)
    cy.get('#phone-no').clear()
    cy.wait(1000)
    cy.get('#phone-no').type('9876543210')
    cy.wait(1000)

    cy.get('#email').clear()
    cy.wait(1000)
    cy.get('#email').type('dev@optilab.eu')
    cy.wait(1000)
    cy.get('#submit-button-admin').click()
    cy.wait(2000)
  })
})
