
describe('SauceDemo End-to-End Flow', () => {
    it('should log in, search for a product, add it to the cart, and verify amount calculation', () => {  
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user'); 
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click(); 
        cy.url().should('include', '/inventory.html'); 
        cy.get('.inventory_list').should('be.visible');
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
    });

    });
