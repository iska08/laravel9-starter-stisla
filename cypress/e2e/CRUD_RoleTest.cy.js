describe('Kuis 1 PPL', () => {
  it('CRUD Role List', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com")
    cy.get(':nth-child(3) > .form-control').type("password")
    cy.get('.btn').click()
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get(':nth-child(3) > .has-dropdown > span').click()
    cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click()
    cy.get('.card-header-action > .btn-icon').click()
    cy.get('.card-body > form > :nth-child(2)').type("user-sementara")
    cy.get('.card-body > form > :nth-child(3)').type('{selectall}{backspace}').type("user")
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .text-right > .d-flex > .btn-info').click()
    cy.get('.card-body > form > :nth-child(3)').type('{selectall}{backspace}').type("user-permanen")
    cy.get('.card-body > form > :nth-child(4)').type('{selectall}{backspace}').type("web")
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .text-right > .d-flex > .ml-2 > .btn').click()
    cy.get('.navbar-right > :nth-child(2) > .nav-link').click()
    cy.get('.text-danger').click()
  })
})