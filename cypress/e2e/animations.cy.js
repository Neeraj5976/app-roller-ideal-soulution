describe('Animation and Transition Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should animate feature cards on hover', () => {
    cy.get('.feature-card').first()
      .then($card => {
        const initialShadow = $card.css('box-shadow')
        cy.wrap($card)
          .trigger('mouseover')
          .should('have.css', 'box-shadow')
          .and('not.equal', initialShadow)
      })
  })

  it('should have smooth theme transition', () => {
    cy.get('.nav-left .theme-toggle').click()
    cy.get('html')
      .should('have.attr', 'data-theme', 'dark')
      .should('have.css', 'transition')
  })

  it('should have smooth button hover transitions', () => {
    cy.get('.button').first()
      .trigger('mouseover')
      .should('have.css', 'transform')
  })

  it('should have proper navigation link hover effects', () => {
    cy.get('.nav-links a').first()
      .trigger('mouseover')
      .should('have.css', 'opacity')
  })
}) 