/// <reference types="cypress" />

describe('Cypress File Upload Tests', () => {
    /**
     * 1. In order to upload Cypress we need to install plugin
     * we will run following command:
     * npm install -dev cypress-file-upload
     * 
     * 2. We need to import necessary command to our project
     * in our support folder we have command.js file - this is the filde for storing utility methods(functions)
     * add line to the command.js file :
     * import 'cypress-file-upload';
     * 
     * 3. Place the file that you want to upload into the fixtures folder
     */
 
    beforeEach('Navigate to upload page', () => {
      // runs before each test case, beforeMethod in TestNG
      cy.clearCookies();
      cy.visit('/upload')
    });

    it('Check Upload action', () => {
        // locator to choose file button
        cy.get('input#file-upload').attachFile('JavaScript_Intro.pdf')
        // click the Upload button
        cy.get('#file-submit').click()
        // assert the message is displayed
        cy.get('#uploaded-files').then(() =>{
            cy.contains('JavaScript_Intro.pdf').should('be.visible')
        })
    })





})