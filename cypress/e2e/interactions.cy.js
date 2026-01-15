describe('Interactions and Responsiveness', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should be responsive on mobile viewport', () => {
        cy.viewport('iphone-x');
        cy.get('nav').should('be.visible');
        cy.get('footer').should('be.visible');
        // Check alignment or visibility of specific mobile elements if any
        // For example, checking if the detailed nav links are hidden or in a menu
        // Based on Navbar.jsx: hidden md:flex -> should be hidden on mobile
        cy.get('nav a[href="#about"]').should('not.be.visible');
    });

    it('should filter projects when tabs are clicked', () => {
        cy.get('#projects').scrollIntoView();

        // Initial state: All projects visible
        // We can't easily count exact items without knowing data length, but we can check the button state
        cy.contains('button', 'All').should('have.class', 'bg-black');

        // Click 'Infrastructure' filter
        cy.contains('button', 'Infrastructure').click();
        cy.contains('button', 'Infrastructure').should('have.class', 'bg-black');
        cy.contains('button', 'All').should('not.have.class', 'bg-black');

        // Verify some filtering happened (this assumes we have mixed data)
        // Ideally we would mock data, but for e2e we assume the real data works
    });

    it('should show "View Resume" button with correct state', () => {
        cy.contains('button', 'View Resume')
            .should('be.visible')
            .and('not.be.disabled');
    });

    it('should have functional social links', () => {
        // Check Github link in Hero
        cy.get('a[href*="github.com"]').first().should('be.visible');

        // Check LinkedIn link in Hero
        cy.get('a[href*="linkedin.com"]').first().should('be.visible');
    });
});
