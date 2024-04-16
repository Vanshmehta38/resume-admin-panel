import './login-success.cy'

describe('Go to roles page', { testIsolation: false }, () => {
  // ** list
  it('should show roles page, check validation and add roles', () => {
    cy.wait(2000)

    const s = 2
    const i = 5
    const sb = 3

    // const i = Math.floor(Math.random() * (3 - 1)) + 1

    cy.contains('Roles').click({ force: true })
    cy.wait(2000)
    cy.get(
      ':nth-child(14) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(1) > .MuiButtonBase-root'
    ).click({ force: true })
    cy.wait(2000)

    cy.get('#add-role').click()
    cy.wait(1000)
    cy.get('#role-submit').click()
    cy.wait(1500)

    // cy.scrollTo(100,0)
    cy.get('#name').type('Country Admin')
    cy.wait(1000)

    cy.get('#select-all-role').click()
    cy.wait(1000)
    cy.get('#select-all-role').click()
    cy.wait(1000)
    cy.get(`:nth-child(${s}) > .css-b1kii9-MuiTableCell-root > #select-role-and-permission`).click()
    cy.wait(1500)
    cy.get(`:nth-child(${sb}) > :nth-child(2) > #select-all-row-role`).click()
    cy.wait(1500)
    cy.get(`:nth-child(${sb}) > :nth-child(3) > .MuiFormControl-root > #select-read-role`).click()
    cy.wait(1500)
    cy.get(`:nth-child(${sb}) > :nth-child(3) > .MuiFormControl-root > #select-read-role`).click()
    cy.wait(1500)

    cy.get(`:nth-child(${i}) > :nth-child(2) > #select-all-row-role`).click()
    cy.wait(1500)
    cy.get(`:nth-child(${i}) > :nth-child(3) > .MuiFormControl-root > #select-read-role`).click()
    cy.wait(1500)
    cy.get(`:nth-child(${i}) > :nth-child(3) > .MuiFormControl-root > #select-read-role`).click()
    cy.wait(1500)

    cy.get(`:nth-child(${i}) > :nth-child(4) > #select-write-role`).click()
    cy.wait(1500)
    cy.get(`:nth-child(${i}) > :nth-child(5) > #select-update-role`).click()
    cy.wait(1500)
    cy.get(`:nth-child(${i}) > :nth-child(6) > #select-delete-role`).click()
    cy.wait(1500)
    cy.get(`:nth-child(${i}) > :nth-child(7) > #select-status-role`).click()
    cy.wait(1500)
    cy.get(`:nth-child(${i}) > :nth-child(3) > .MuiFormControl-root > #select-read-role`).click()
    cy.wait(1500)
    cy.get(`:nth-child(${i}) > :nth-child(3) > .MuiFormControl-root > #select-read-role`).click()
    cy.wait(1500)

    cy.get('#role-submit').click()
  })

  // ** edit
  it('should show edit class, check validation and update edit class', () => {
    const s = 2
    const i = 5
    const sb = 3

    {
      cy.get('.MuiPaper-root').then(() => {
        // cy.get(
        //   `:nth-child(${i}) > .MuiPaper-root > .MuiCardContent-root > .css-1n5rntj > :nth-child(2) > #edit-role-icon`
        // )
        cy.get(
          ':nth-child(2) > .MuiPaper-root > .MuiCardContent-root > .css-1n5rntj > :nth-child(2) > #edit-role-icon'
        ).click()
        cy.wait(2000)

        cy.get('#name').clear()
        cy.wait(1000)
        cy.get('#name').type('Principal')
        cy.wait(1000)

        cy.get('#select-all-role').click()
        cy.wait(1000)
        cy.get('#select-all-role').click()
        cy.wait(1000)

        cy.get(`:nth-child(${s}) > .css-b1kii9-MuiTableCell-root > #select-role-and-permission`).click()
        cy.wait(1500)
        cy.get(`:nth-child(${sb}) > :nth-child(2) > #select-all-row-role`).click()
        cy.wait(1500)
        cy.get(`:nth-child(${sb}) > :nth-child(3) > .MuiFormControl-root > #select-read-role`).click()
        cy.wait(1500)
        cy.get(`:nth-child(${sb}) > :nth-child(3) > .MuiFormControl-root > #select-read-role`).click()
        cy.wait(1500)

        cy.get(`:nth-child(${i}) > :nth-child(2) > #select-all-row-role`).click()
        cy.wait(1500)

        cy.get(`:nth-child(${i}) > :nth-child(3) > .MuiFormControl-root > #select-read-role`).click()
        cy.wait(1500)
        cy.get(`:nth-child(${i}) > :nth-child(3) > .MuiFormControl-root > #select-read-role`).click()
        cy.wait(1500)

        cy.get(`:nth-child(${i}) > :nth-child(4) > #select-write-role`).click()
        cy.wait(1500)
        cy.get(`:nth-child(${i}) > :nth-child(5) > #select-update-role`).click()
        cy.wait(1500)
        cy.get(`:nth-child(${i}) > :nth-child(6) > #select-delete-role`).click()
        cy.wait(1500)
        cy.get(`:nth-child(${i}) > :nth-child(7) > #select-status-role`).click()
        cy.wait(1500)
        cy.get(`:nth-child(${i}) > :nth-child(3) > .MuiFormControl-root > #select-read-role`).click()
        cy.wait(1500)
        cy.get(`:nth-child(${i}) > :nth-child(3) > .MuiFormControl-root > #select-read-role`).click()
        cy.wait(1500)
        cy.get('#role-submit').click()
      })
    }
  })

  // ** view
  it('should show roles page and view role', () => {
    const i = Math.floor(Math.random() * (3 - 1)) + 1
    {
      cy.get(
        `:nth-child(${i}) > .MuiPaper-root > .MuiCardContent-root > .css-1n5rntj > :nth-child(2) > .css-69i1ev > #view-role-icon`
      ).click()
      cy.wait(2000)
      cy.scrollTo(0, 500)

      cy.get('#role-status').click()
      cy.wait(2000)
    }
  })

  // ** delete
  it('should show roles page and delete role', () => {
    // const i = Math.floor(Math.random() * (3 - 1)) + 1
    {
      cy.get(
        `:nth-child(${2}) > .MuiPaper-root > .MuiCardContent-root > .css-1n5rntj > :nth-child(2) > .css-69i1ev > .MuiBox-root > #delete-role-icon`
      ).click()
      cy.wait(2000)
      cy.get('#confirm-delete').click()
      cy.wait(2000)
    }
  })
})
