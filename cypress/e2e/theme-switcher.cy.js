describe('Theme Switcher Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clearLocalStorage()
  })

  it('should load with light theme by default', () => {
    cy.get('html').should('have.attr', 'data-theme', 'light')
    cy.get('.nav-left .theme-toggle .sun-icon').should('be.visible')
  })

  it('should switch to dark theme when clicking toggle', () => {
    cy.get('.nav-left .theme-toggle').click()
    cy.get('html').should('have.attr', 'data-theme', 'dark')
    cy.get('.toggle-circle')
      .should('have.css', 'transform')
      .and('equal', 'matrix(1, 0, 0, 1, 24, 0)')
  })

  it('should switch back to light theme when clicking toggle again', () => {
    cy.get('.nav-left .theme-toggle').click()
    cy.get('.nav-left .theme-toggle').click()
    cy.get('html').should('have.attr', 'data-theme', 'light')
  })

  it('should persist theme preference after page refresh', () => {
    cy.get('.nav-left .theme-toggle').click()
    cy.reload()
    cy.get('html').should('have.attr', 'data-theme', 'dark')
  })

  it('should show correct icon based on theme', () => {
    cy.get('.sun-icon').should('have.css', 'opacity', '1')
    cy.get('.moon-icon').should('have.css', 'opacity', '0.5')
    cy.get('.nav-left .theme-toggle').click()
    cy.get('.sun-icon').should('have.css', 'opacity', '0.5')
    cy.get('.moon-icon').should('have.css', 'opacity', '1')
  })

  it('should have smooth transition for toggle circle', () => {
    cy.get('.toggle-circle').should('have.css', 'transition')
    cy.get('.nav-left .theme-toggle').click()
    cy.get('.toggle-circle')
      .should('have.css', 'transform')
      .and('equal', 'matrix(1, 0, 0, 1, 24, 0)')
  })
}) 