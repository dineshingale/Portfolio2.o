describe('Section Content Visibility', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the Hero section content', () => {
        cy.contains('Available for Hire').should('be.visible');
        cy.contains('Architecting').should('be.visible');
        cy.contains('Intelligent').should('be.visible');
        cy.contains('Dinesh Ingale').should('be.visible');
        cy.get('img[alt="Dinesh Ingale"]').should('be.visible');
    });

    it('should display the About section content', () => {
        cy.get('#about').scrollIntoView();
        cy.get('#about').should('be.visible');
        cy.get('#about').within(() => {
            cy.contains('About Me').should('be.visible');
            cy.contains('Graduation Year').should('be.visible');
            cy.contains('Projects').should('be.visible');
            cy.contains('Certifications').should('be.visible');
        });
    });

    it('should display the Skills section content', () => {
        cy.get('#skills').scrollIntoView();
        cy.get('#skills').should('be.visible');
        cy.get('#skills').within(() => {
            cy.contains('Technical Arsenal').should('be.visible');
            // Check for skill categories (assuming titles are rendered in SkillCategory)
            cy.get('.grid').children().should('have.length.at.least', 1);
        });
    });

    it('should display the Projects section content', () => {
        cy.get('#projects').scrollIntoView();
        cy.get('#projects').should('be.visible');
        cy.get('#projects').within(() => {
            cy.contains('Featured Projects').should('be.visible');
            // Check for filter tabs
            cy.contains('All').should('be.visible');
            cy.contains('Infrastructure').should('be.visible');
            // Check that projects are loaded
            cy.get('.grid').children().should('have.length.gt', 0);
        });
    });

    it('should display the Experience section content', () => {
        cy.contains('Professional Journey').scrollIntoView().should('be.visible');
        cy.contains('Ready to optimize your workflow?').should('be.visible');
    });
});
