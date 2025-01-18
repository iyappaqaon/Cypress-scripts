describe('Login Page Tests', () => {

    it('Invalid login creds', () => {
      cy.visit('https://vantage-uatx.unqork.io/');
      cy.get('#username').type('invalidUser');
      cy.get('#password').type('invalidPassword');
      cy.get('.btn').click();
      cy.get('#swal2-content').should('be.visible').and('contain.text', 'Invalid Credentials');
    });
    it('Should log in successfully with valid credentials', () => {
      cy.visit('https://vantage-uatx.unqork.io/');
      cy.get('#username').type('priya.darsini+orionadm@auxosolutions.io');
      cy.get('#password').type('Unqork@12345');
      cy.get('.btn').click();
      cy.wait(6000)
      cy.get('.page-title').should('be.visible').and('contain.text', 'Dashboard');
      cy.get('#btnPortfolio').should('be.visible').click()
      cy.wait(6000)
      cy.get('.ag-pinned-left-cols-container > .ag-row-first > .ag-cell > .ag-react-container > .unq-dynamic-grid__cell-value').click()
      cy.wait(6000)
      cy.get('#btnApplyAll > .button-label').click()
      cy.get('#selectColumndgAsset').select('Rent')
      cy.get('#valueFordgAsset').type('1122.12')
      cy.get('#btnSubmit > .button-label').click()
      cy.get('#ag-1181-input').click()
      cy.get('#ag-879-input').click()
      cy.get('#btnReset').click()
      cy.get('.ng-binding > :nth-child(2)').contains('Are you sure you would like to reset the asset values and selections?')
      cy.get('#btnCancelReset > .button-label').click()
      cy.get('#btnReset').click()
      cy.get('#btnConfirmReset').click()
      cy.get('.sidebar-toggle > img').click()
      cy.get('#btnDashboard').click()
      cy.get('#btnUploadModalTrigger').click()
      cy.get('#uploadPortfolioName').type('Testing')
      cy.get('.dateinput-picker').click()
      cy.get('#projectStartDateUnformatted').type(992020)
      cy.get('#buyingEntityId').select('Property Buyers Inc.')
      cy.get('.ui-select-search').click()
      cy.get('#ui-select-choices-row-0-1 > .ui-select-choices-row-inner > .ng-isolate-scope > .ng-binding').click()
      cy.get('#ui-select-choices-row-0-2 > .ui-select-choices-row-inner > .ng-isolate-scope > .ng-binding').click()
      cy.get('#btnUpload').click()
      cy.get('.swal2-popup').should('be.visible');
      cy.get('.swal2-confirm').click();
      cy.get('#btnCancel > .button-label').click()

            
      });
  });
  