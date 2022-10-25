describe('Kuis 1 PPL', () => {
  it('Login, Cek Halaman User, Logout', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com")
    cy.get(':nth-child(3) > .form-control').type("password")
    cy.get('.btn').click()
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.get(':nth-child(2) > .has-dropdown > span').click()
    cy.get('.active > .dropdown-menu > li > .nav-link').click()
    cy.get('.navbar-right > :nth-child(2) > .nav-link').click()
    cy.get('.text-danger').click()
  })
})