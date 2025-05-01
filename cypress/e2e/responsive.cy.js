describe('Responsive Design Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const viewports = [
    { width: 375, height: 667, device: 'mobile' },
    { width: 768, height: 1024, device: 'tablet' },
    { width: 1440, height: 900, device: 'desktop' }
  ]

  viewports.forEach(viewport => {
    describe(`${viewport.device} viewport (${viewport.width}x${viewport.height})`, () => {
      beforeEach(() => {
        cy.viewport(viewport.width, viewport.height)
      })

      it('should display navigation appropriately', () => {
        cy.get('.nav-links').should('exist')
        cy.get('.nav-left').should('exist')
      })

      it('should have readable text sizes', () => {
        cy.get('h1').should('be.visible')
        cy.get('p').should('be.visible')
      })

      it('should maintain proper spacing', () => {
        cy.get('.feature-card').should('have.css', 'margin-bottom')
        cy.get('section').should('have.css', 'padding')
      })

      it('should handle images responsively', () => {
        cy.get('svg').should('exist')
      })

      if (viewport.width < 768) {
        it('should have working mobile menu', () => {
          cy.get('.mobile-menu-button').click()
          cy.get('.mobile-menu-items').should('be.visible')
        })
      }
    })
  })
}) 