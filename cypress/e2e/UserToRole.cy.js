describe('Kuis 1 PPL', () => {
  it('CRUD User to Role', () => {
    cy.visit('http://127.0.0.1:8000/')

    // login
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com")
    cy.get(':nth-child(3) > .form-control').type("password")
    cy.get('.btn').click()

    // Create User to Role
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get(':nth-child(3) > .has-dropdown > span').click()
    cy.get('.dropdown-menu > :nth-child(4) > .nav-link').click()
    cy.get('.card-header-action > .btn').click()
    cy.get('#user').select("user", { force: true})
    cy.get('#roles').select("super-admin", { force: true})
    cy.get('.btn-primary').click()

    // Edit User to Role
    cy.get(':nth-child(3) > .text-right > .d-flex > .btn > .fas').click()
    cy.get('[title="user"] > .select2-selection__choice__remove').click()
    cy.get('[title="super-admin"] > .select2-selection__choice__remove').click()
    cy.get('#roles').select("user", { force: true})
    cy.get('.btn-primary').click()
  })
})