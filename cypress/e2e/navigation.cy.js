describe('Navigation and Layout', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the Navbar', () => {
        cy.get('nav').should('be.visible');
        cy.contains('DevOps.AI').should('be.visible');
    });

    it('should display the Footer', () => {
        cy.get('footer').should('be.visible');
        cy.contains('Dinesh Ingale').should('be.visible');
    });

    it('should navigate to sections when clicking links', () => {
        const sections = ['#about', '#skills', '#projects'];

        sections.forEach(section => {
            cy.get(`a[href="${section}"]`).click();
            cy.url().should('include', section);
            // Verify the section exists in the DOM
            cy.get(section).should('exist');
        });
    });

    it('should have a working "Let\'s Talk" button', () => {
        cy.contains("Let's Talk")
            .should('be.visible')
            .and('have.attr', 'href', 'mailto:dineshingale2003@gmail.com');
    });
});
