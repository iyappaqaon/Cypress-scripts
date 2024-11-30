describe('Custom Commands Demo', function(){
    it('Student Login', function(){

        cy.login('student','Password123')
        cy.title().should('be.equal','Logged In Successfully | Practice Test Automation')
        cy.logiin('student','Password')
        cy.title().should('not.be.equal','Logged In Successfully | Practice Test Automation') 
 })

    it('Adding Student ', function(){
        cy.login('student','Password123')
        cy.log('Adding a student..........')
    })

    
    it('Editing student', function(){

        cy.login('student','Password123')
        cy.log('Editing a student..........')     
    })
})

