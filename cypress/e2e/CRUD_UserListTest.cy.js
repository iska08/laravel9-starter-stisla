describe('Kuis 1 PPL', () => {
  it('CRUD User List', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com")
    cy.get(':nth-child(3) > .form-control').type("password")
    cy.get('.btn').click()
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get(':nth-child(2) > .has-dropdown > span').click()
    cy.get('.active > .dropdown-menu > li > .nav-link').click()
    cy.get('.card-header-action > .btn-icon').click()
    cy.get('.card-body > form > :nth-child(2)').type("user2")
    cy.get('.card-body > form > :nth-child(3)').type("admin2@gmail.com")
    cy.get('.card-body > form > :nth-child(4)').type("password")
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .text-right > .d-flex > .btn-info').click()
    cy.get('.card-body > :nth-child(3)').type('{selectall}{backspace}').type("user cadangan")
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .text-right > .d-flex > .ml-2 > .btn').click()
    cy.get('.navbar-right > :nth-child(2) > .nav-link').click()
    cy.get('.text-danger').click()
  })
})