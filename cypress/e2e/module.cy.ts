describe('Modules Page', () => {
    
    beforeEach(() => {
        cy.login();
    });

    it('should display the component to "Material didático"', () => {
        let path = cy.get('[ng-reflect-name="Material didático"] > a > .column > .circle');
        path.should('exist');
        path.click();
        cy.url().should('include', '/teaching-lite');
    });

    it('should display the component to "Quiz"', () => {
        let path = cy.get('[ng-reflect-name="Quiz"] > a > .column > .circle');
        path.should('exist');
        path.click();
        cy.url().should('include', '/teaching-lite');
    });

    it('should display the component to "Desenho"', () => {
        let path = cy.get('[ng-reflect-name="Desenho"] > a > .column > .circle');
        path.should('exist');
        path.click();
        cy.url().should('include', '/teaching-lite');
    });

    it('should display the component to "Youtube"', () => {
        let path = cy.get('[ng-reflect-name="Youtube"] > a > .column > .circle');
        path.should('exist');
        path.click();
        cy.url().should('include', '/teaching-lite');
    });
});