/// <reference types="cypress" />

describe('Context: My first Tests', () => {
    before(() =>{
        // runs once before all test cases in this describe block, like beforeClass in TestNG
    })

    beforeEach(() => {
        // runs before each test case, beforeMethod in TestNG
        cy.clearCookies()
    })

    after(() => {
        // runs once after all tests finished, similar to afterClass in TestNg
    })

    afterEach(() => {
        // runs after each test case, aka afterMethod in TestNG
    })

    it.only('Opening a web application', () => {
        cy.visit('https://practice.cydeo.com/');
        cy.get(':nth-child(3) > a').click();
    })

    it('Test 2', () =>{
        expect(false).to.equal(false)
    })
    it('Test 3', () => {
        expect(false).not.to.equal(true)
    })
    it('Test 4', () => {
        expect(5).to.equal(5)
    })
    it('Test 5', () => {
        expect(true).to.equal('5' == 5)
    })
    
    

})