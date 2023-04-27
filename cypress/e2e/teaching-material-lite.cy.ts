describe('Teaching material lite Page', () => {
    
    
    beforeEach(() => {
        cy.login();
        cy.intercept('https://api.trakto.io/document', { statusCode: 200, fixture: '/teaching-material.json'}).as(
        'list-documents',
    );
        cy.visit('/teaching-lite');
    });

    it('should display the banner image', () => {
        cy.get('[src="assets/TraktoEduBanner.png"]').should('be.visible');
    });

    it('should have a static field, informing the weeks', () => {
        cy.get('.weeks').should('be.visible');
        cy.get('.weeks').should('contain.text', 'Semana 06/02 até 28/02');
    });

    it('should have a button, that redirects to the larger list of materials', () => {
        cy.get('.filter > button').should('be.visible');
        cy.get('.filter > button').should('contain.text', 'Ver todo conteúdo');
    });

    it('should have a title and a caption', () => {
        cy.get('h3').should('be.visible');
        cy.get('h3').should('contain.text', 'Material didático');
        cy.get('.title > p').should('be.visible');
        cy.get('.title > p').should('contain.text', 'Acesse suas últimas apresentações da aula.');
    });

    it('should have a space to show 10 of the user teaching materials', () => {
        cy.get('.inner-row').should('be.visible');
    });
});

