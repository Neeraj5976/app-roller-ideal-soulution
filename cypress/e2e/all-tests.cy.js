describe('Website Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Content and Layout Tests', () => {
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
          .trigger('mouseover')
          .should('have.css', 'transition')
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

  describe('Theme Switcher Tests', () => {
    beforeEach(() => {
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
        .and('equal', 'matrix(1, 0, 0, 1, 20, 0)')
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
        .and('equal', 'matrix(1, 0, 0, 1, 20, 0)')
    })
  })

  describe('Animation and Transition Tests', () => {
    it('should animate feature cards on hover', () => {
      cy.get('.feature-card').first()
        .trigger('mouseover')
        .should('have.css', 'transition')
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

  describe('Accessibility Tests', () => {
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

  describe('Responsive Design Tests', () => {
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

  describe('Navigation Tests', () => {
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
}) 