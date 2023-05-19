/// <reference types="cypress" />


describe('Find or Get elements by usinf different locators', () => {
  
    beforeEach(() => {
        // runs before each test case, beforeMethod in TestNG
        cy.clearCookies()
        cy.visit('/login')
    })

it('Check different locators strategies', () => {
 // CSS locator
 cy.get('input[name="username"]').type("JaneDon"); 
 // every statement creates an object to be interected, and next command makes operation to the object created at the previous statement

 // attribute name and value
 cy.get('[type="text"]').clear()


 // tag name
 cy.get('input').each((element, index, list) =>{
    // assert the length of the list is 2
    expect(list).to.have.length(2)
    expect(element).to.have.attr('type')
 })

 // attribute name
 cy.get('[type]')

 // class name
 cy.get('.btn.btn-primary')

 // id
 cy.get('#wooden_spoon')

 // by text
 cy.get('button').should('contain', 'Login').click()

})


})