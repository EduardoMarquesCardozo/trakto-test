describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the login page', () => {
        cy.get('h3').should('contain.text', 'Olá, faça login em sua conta.');
    });

    it('should have an email input field', () => {
        cy.get('input[type="text"]').should('be.visible');
    });

    it('should have a password input field', () => {
        cy.get('input[type="password"]').should('be.visible');
    });

    it('should have a submit button', () => {
        cy.get('button[type="submit"]').should('be.visible');
    });

    it('requires a valid email to be entered', () => {
        cy.get('input[type="text"]').type('email');
        cy.get('.alert').contains('Favor informar um e-mail válido');
    });
    
    it('requires a password to be entered', () => {
        cy.get('input[type="password"]').click();
        cy.get('input[type="text"]').click();
        cy.get('.alert').contains('Favor informar uma senha válida');
    });
    
    it('logs in successfully with valid credentials', () => {
        cy.get('input[type="text"]').type('emarquescardozo@gmail.com');
        cy.get('input[type="password"]').type('Essasenha10!)');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/modules');
    });
});