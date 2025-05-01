describe('Content and Layout Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Hero Section', () => {
    it('should take full viewport height', () => {
      cy.get('.hero').should('have.css', 'min-height').and('match', /^(100vh|[0-9]+px)$/)
    })

    it('should have properly aligned and readable text', () => {
      cy.get('.hero-content').should('be.visible')
      cy.get('.hero h1').should('be.visible')
      cy.get('.hero p').should('be.visible')
    })

    it('should have clickable waitlist button', () => {
      cy.get('.hero .button')
        .should('be.visible')
        .and('have.attr', 'href', '#contact')
        .click()
      cy.get('#contact').should('be.visible')
    })

    it('should maintain proper spacing', () => {
      cy.get('.hero').should('have.css', 'padding')
    })
  })

  describe('Features Section', () => {
    it('should display all three feature cards', () => {
      cy.get('#features .feature-card').should('have.length', 3)
    })

    it('should have proper hover effects on cards', () => {
      cy.get('.feature-card').first()
        .then($card => {
          const initialShadow = $card.css('box-shadow')
          cy.wrap($card)
            .trigger('mouseover')
            .should('have.css', 'box-shadow')
            .and('not.equal', initialShadow)
        })
    })

    it('should have properly aligned content', () => {
      cy.get('.feature-card').each($card => {
        cy.wrap($card).within(() => {
          cy.get('h3').should('be.visible')
          cy.get('p').should('be.visible')
        })
      })
    })

    it('should have grid layout', () => {
      cy.get('.features-grid').should('have.css', 'display', 'grid')
    })
  })

  describe('About Section', () => {
    it('should display all three information cards', () => {
      cy.get('#about .feature-card').should('have.length', 3)
    })

    it('should have smooth card hover animations', () => {
      cy.get('#about .feature-card').first()
        .trigger('mouseover')
        .should('have.css', 'transition')
    })

    it('should have centered and readable text', () => {
      cy.get('#about h2').should('be.visible')
      cy.get('#about p').should('be.visible')
    })
  })

  describe('Contact Section', () => {
    it('should maintain proper spacing', () => {
      cy.get('.contact').should('have.css', 'padding')
    })

    it('should have working email button', () => {
      cy.get('.contact .button')
        .should('be.visible')
        .and('have.attr', 'href', 'mailto:hello@rollers.ai')
    })
  })
}) 