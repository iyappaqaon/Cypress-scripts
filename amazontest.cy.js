
import ProductPage from '../POM/ProductPage';

describe('Add product to cart on Amazon', () => {
    const productPage = new ProductPage();
    let userdata;
    before(function() {
    cy.fixture("Amazon.json").then(function(data){
       userdata=data
    })
})

const url = 'https://www.amazon.in/';

beforeEach(() => {
cy.visit(url);
})

it.only('Sign in', ()=>{
    cy.get("span[class='nav-line-2 ']").click()
    cy.get('#ap_email').type(userdata.mobileno)
    cy.get('.a-button-inner > #continue').click()
    cy.get('#ap_password').type(userdata.password)
    cy.get('#signInSubmit').click()
    cy.wait(8000);

})


    it('Search and add product to the cart', () => {
       
        const productName = 'Gaming chair';
        productPage.searchProduct(productName);
               
        productPage.selectProduct();
                
        productPage.addToCart();
               
        productPage.verifyProductInCart();
        
        productPage.visit();
        
        productPage.verifyProductInCart();
       
    });

});
