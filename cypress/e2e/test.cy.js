describe('Kuis 1 PPL', () => {
  it('login', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('.shadow-light')
    cy.get('.card-header')
    cy.get('.needs-validation > :nth-child(2)')
    cy.get('.text-small')
    cy.get('.needs-validation')
    cy.get('.btn')
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com")
    cy.get(':nth-child(3) > .form-control').type("password")
    cy.get('.btn').click()
  });
})