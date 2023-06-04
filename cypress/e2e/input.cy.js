/// <reference types="cypress" />

describe('Input Forms Testing', () => {
 
    beforeEach('Navigate to registration page', () => {
      // runs before each test case, beforeMethod in TestNG
      cy.clearCookies();
      cy.visit('/registration_form')
    });
  
   
  
    it.skip('Check different input box fields and verify', () => {
      // fill the form for user
      cy.get('input[name="firstname"]').type('Mike')
      cy.get('input[name="lastname"]').type('Brown')
      cy.get('input[name="username"]').type('BrownMikki')
      /**
       * Math.random() = creates a number bewtween 0 - 1 ~ 0.005678
       * Math.floor()  = makes it a whole number
       */
      let email = `formtest${Math.floor(100000+Math.random()*900000)}@cydeo.com`
      cy.get('input[name="email"]').type(email)

      let password = `test${Math.floor(100000+Math.random()*900000)}`
      cy.get('input[name="password"]').type(password)

      let phoneNumber = `555-000-${Math.floor(100000+Math.random()*900000)}` // 4 digit extension
      cy.get('input[name="phone"]').type(phoneNumber)

      cy.get('input[name="birthday"]').type('01/01/1999')

    });

    it('Check different radio buttons', () => {
      cy.get('.radio')
      .find('[type=radio]')
      .then((radio => {
        // get all radio buttons, select the first one and verify it's checked
        cy.wrap(radio).first().check().should('be.checked'); // cypress works in  a chainable functions structure
        /**
         * radio: is JQuery element, cy.wrap(radio) turns it into Cypress object so that I can use cypress functions
         * first() selects first element
         * check() checks element
         * should() verifies 
         */

        // select the second radio button and verify confirmation label appears
        cy.wrap(radio).eq(1).check().should('be.checked');
        cy.get('[data-bv-icon-for="gender"]').should('be.visible')
        // 3rd  radio button is not checked
        cy.wrap(radio).eq(2).check().should('not.be.checked')

      }))
    })
  
 

  });
  