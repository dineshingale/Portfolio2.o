describe('Smoke Test', () => {
    it('should load the homepage and display the hero text', () => {
        cy.visit('/');
        cy.contains('Dinesh Ingale').should('be.visible');
    });
});
