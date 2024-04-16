import './login-success.cy'

describe('Go to permission page', { testIsolation: false }, () => {
  it('should show permission page, check validation and permission', () => {
    cy.wait(2000)

    cy.contains('Roles').click({ force: true })
    cy.wait(2000)
    cy.get(
      ':nth-child(14) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(2) > .MuiButtonBase-root'
    ).click({ force: true })
    cy.wait(2000)
  })
})
