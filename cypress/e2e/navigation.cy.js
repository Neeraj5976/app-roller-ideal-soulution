describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should scroll to top when clicking logo', () => {
    cy.get('.nav-left .logo').click()
    cy.window().its('scrollY').should('equal', 0)
  })

  it('should scroll to features section when clicking features link', () => {
    cy.get('.nav-links a[href="#features"]').click()
    cy.get('#features').should('be.visible')
    cy.get('#features').should('be.inViewport')
  })

  it('should scroll to about section when clicking about link', () => {
    cy.get('.nav-links a[href="#about"]').click()
    cy.get('#about').should('be.visible')
    cy.get('#about').should('be.inViewport')
  })

  it('should scroll to contact section when clicking contact link', () => {
    cy.get('.nav-links a[href="#contact"]').click()
    cy.get('#contact').should('be.visible')
    cy.get('#contact').should('be.inViewport')
  })

  it('should keep navigation fixed while scrolling', () => {
    cy.get('nav').should('have.css', 'position', 'fixed')
    cy.scrollTo(0, 500)
    cy.get('nav').should('be.visible')
    cy.get('nav').should('have.css', 'position', 'fixed')
  })
}) 