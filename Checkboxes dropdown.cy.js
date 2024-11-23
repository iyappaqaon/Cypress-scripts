describe("Check Boxes",function(){

  it("Single Selection", function(){

      cy.visit("https://demo.guru99.com/test/radio.html")

      // Selecting Single Checkboxes

      cy.get("input#vfb-6-0").check().should("be.checked")
      cy.get("input#vfb-6-1").check().should("be.checked")
      cy.get("input#vfb-6-2").check().should("be.checked")
      cy.wait(2000)
      cy.get("input#vfb-6-0").uncheck().should("not.be.checked")
      cy.get("input#vfb-6-1").uncheck().should("not.be.checked")
      cy.get("input#vfb-6-2").uncheck().should("not.be.checked")
      cy.wait(2000)
  })

  it("Multiple Selection",function(){

      // Multiple Selection

      cy.visit("https://demo.guru99.com/test/radio.html")
      cy.get('input[type="checkbox"]').check().should("be.checked")
      cy.wait(2000)
      // Uncheck all the checkboxes
      cy.get('input[type="checkbox"]').uncheck().should("not.be.checked")
      cy.wait(2000)

  })

  it("test1",function(){

    cy.visit("https://demo.guru99.com/test/radio.html")


    cy.get("input#vfb-7-1").should("be.visible")
    cy.get("input#vfb-7-2").should("be.visible")
    cy.get("input#vfb-7-3").should("be.visible")
    cy.wait(2000)
    cy.get("input#vfb-7-1").check().should("be.checked")
    cy.get("input#vfb-7-2").should("not.be.checked")
    cy.get("input#vfb-7-3").should("not.be.checked")
    cy.wait(2000)
    cy.get("input#vfb-7-2").check().should("be.checked")    
    cy.get("input#vfb-7-1").should("not.be.checked")      
    cy.get("input#vfb-7-3").should("not.be.checked")
    cy.wait(2000)
    cy.get("input#vfb-7-3").check().should("be.checked")    
    cy.get("input#vfb-7-1").should("not.be.checked")
    cy.get("input#vfb-7-2").should("not.be.checked")
})
})
