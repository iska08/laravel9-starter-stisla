describe('Kuis 1 PPL', () => {
  it('CRUD Permission to Role', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com")
    cy.get(':nth-child(3) > .form-control').type("password")
    cy.get('.btn').click()
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get(':nth-child(3) > .has-dropdown > span').click()
    cy.get('.dropdown-menu > :nth-child(3) > .nav-link').click()
    cy.get('.card-header-action > .btn').click()
    cy.get('.card-body > form > :nth-child(2)').click()
    
    cy.get('.card-body > form > :nth-child(3)').click()
  })
})