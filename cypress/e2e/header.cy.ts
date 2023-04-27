describe('Teaching material list Page', () => {
    
    beforeEach(() => {
        cy.login();
    });

    it('should have a title logo', () => {
        cy.get('.flex > img').should('be.visible');
    });

    it('should have the today date with calendar icon', () => {
        cy.get(':nth-child(1) > .icon').should('be.visible');
        cy.get('.data > :nth-child(1)').should('be.visible');
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = String(today.getFullYear());
        const expectedDate = `${day}/${month}/${year}`;
        cy.get('.data > :nth-child(1)').should('have.text', ' '+expectedDate+' ');
    });

    it('should have a icon to access a dropdown menu', () => {
        cy.get('.flex-center > .icon').should('be.visible');
        cy.get('.flex-center > .icon').click();
    });

    it('should have a dropdown menu that has the logout button', () => {
        cy.get('.flex-center > .icon').click();
        cy.get('.dropdown > a').should('be.visible');
        cy.get('.dropdown > a').should('have.text', 'Logout');
        cy.get('.dropdown > a').click();
        cy.url().should('include', '/login');
    });
});

