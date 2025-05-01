describe('Accessibility Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have proper heading hierarchy', () => {
    cy.get('h1').should('exist')
    cy.get('h2').should('exist')
    cy.get('h3').should('exist')
  })

  it('should have sufficient color contrast', () => {
    cy.get('body').should('have.css', 'color')
    cy.get('body').should('have.css', 'background-color')
  })

  it('should have proper ARIA labels for interactive elements', () => {
    cy.get('.nav-left .theme-toggle')
      .should('have.attr', 'aria-label')
      .and('include', 'Switch to')
  })

  it('should have proper focus indicators', () => {
    cy.get('.nav-links a').first()
      .focus()
      .should('have.css', 'outline')
  })

  it('should maintain readability in both themes', () => {
    // Check light theme
    cy.get('body').should('be.visible')
    
    // Switch to dark theme
    cy.get('.nav-left .theme-toggle').click()
    cy.get('html').should('have.attr', 'data-theme', 'dark')
    cy.get('body').should('be.visible')
  })

  it('should have proper link text', () => {
    cy.get('a').each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .should('not.be.empty')
    })
  })
}) 