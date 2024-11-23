describe("Dropdowns",function(){

    it("Dropdown 1", function(){
        cy.visit("https://register.rediff.com/register/register.php")
        cy.get('#country').select('Bahrain').should("have.value",16)
        cy.wait(2000)
    })

    it("Dropdown 2", function(){
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type('Automation')
        cy.get(".suggestion-link").contains("Automation").click()
        cy.wait(2000)
    })

    it(" Dropdown 3", function(){
            cy.visit("https://www.google.com/")
            cy.get(".gLFyf").type("cypress automation")
            cy.wait(3000)
            cy.get("div.wM6W7d>span").should("have.length",13)

            cy.get("div.wM6W7d>span").each(($el,index,$list) => {
                
                    if($el.text() == "cypress automation")
                        {
                        cy.wrap($el).click()
                    }
                 })
            cy.get(".gLFyf").contains("cypress automation")
            cy.wait(2000)
    })

})