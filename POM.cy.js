import LoginPage from "./POM/Loginpage.cy"

describe('POM', function(){
    it('Adactin app', function(){
        const login = new LoginPage  
        login.visit()
        login.userName("PreethiSri")
        login.passWord("pree@0212")
        login.loginButton()
        cy.title().should('be.equal','Adactin.com - Search Hotel')
    })    
   } )