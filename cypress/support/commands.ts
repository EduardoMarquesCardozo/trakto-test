/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
    cy.intercept('https://api.trakto.io/auth/signin', { statusCode: 201, fixture: '/login.json'}).as(
        'success-login',
    );
    cy.visit('/login');
    cy.get('input[type="text"]').type('emarquescardozo@gmail.com');
    cy.get('input[type="password"]').type('Essasenha10!)');
    cy.get('button[type="submit"]').click();

    cy.wait('@success-login').then(() => {
        cy.visit('/modules');
    });
});

export {};