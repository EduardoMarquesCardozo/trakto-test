describe('Teaching material list Page', () => {
    
    beforeEach(() => {
        cy.login();
        cy.visit('/teaching-list');
    });

    it('should have a title and a caption', () => {
        cy.get('h3').should('be.visible');
        cy.get('h3').should('contain.text', 'Material didático');
        cy.get('.title > p').should('be.visible');
        cy.get('.title > p').should('contain.text', 'Acesse suas últimas apresentações da aula.');
    });

    it('should have a space to show the list of teaching materials', () => {
        cy.get('.inner-row').should('be.visible');
    });
});

