/// <reference types="cypress" />

describe('Find or Get elements by usinf different locators', () => {
  beforeEach(() => {
    // runs before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/multiple_buttons');
  });

  it('Check different button actions', () => {
    // select a button with text
    cy.contains('Button 2').should('be.visible').click();
    cy.contains('Clicked on button two!').should('be.visible');

    // find elements with class attribute and create a list then select 3d element from the list
    cy.get('.btn.btn-primary').then(($buttons) => {
      cy.wrap($buttons).eq(2).click();
      // assert the text
      cy.contains('Clicked on button three!').should('be.visible');
    });

    // you get all buttons with tagName; each methid is creating a loop
    cy.get('button').each((item, index, list) => {
      // assert length of the list, verify number of buttons
      expect(list).to.have.length(6);
      expect(item).to.have.attr('onclick');
    });

    // I will get all buttons like previos approach, get only the item then check for text of each item,
    // if it is equal to Button 4, them click on it

    cy.get('button').each((item) => {
      if (item.text() == 'Button 4') {
        cy.log(item.text()); // this command writes the text at the test console
        // item.click() // you can not use Cypress .click() on jQuery element
        cy.wrap(item).click();
        cy.contains('Clicked on button four!').should('be.visible');
      }
    });
  });

  // npx cypress run --headless -b chrome
});
