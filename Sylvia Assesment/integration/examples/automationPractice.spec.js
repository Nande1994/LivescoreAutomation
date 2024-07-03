import AutomationPracticePage from '../pageObjects/automationPracticePage';
import SuggestionPage from '../pageObjects/suggestionPage';

describe('Automation Practice Tests', function() {
  const automationPracticePage = new AutomationPracticePage();
  const suggestionPage = new SuggestionPage();

  beforeEach(() => {
    automationPracticePage.visit();
  });

  it('Radio buttons - Validate only one radio button is checked', function() {
    automationPracticePage.getRadioButton(3).check().should('be.checked');
    automationPracticePage.getRadioButton(1).should('not.be.checked');
    automationPracticePage.getRadioButton(2).should('not.be.checked');
  });

  it('Radio buttons - Validate radio button 2 is checked', function() {
    automationPracticePage.getRadioButton(2).check().should('be.checked');
    automationPracticePage.getRadioButton(1).should('not.be.checked');
    automationPracticePage.getRadioButton(3).should('not.be.checked');
  });

  it('Suggestion - Type "South" and select "South Africa"', function() {
    suggestionPage.typeAndSelect('South');
    cy.get('#autocomplete').should('have.value', 'South Africa');
  });

  it('Suggestion - Clear and type "Republic" and select first option', function() {
    suggestionPage.clearAndTypeSelect('Republic');
    cy.get('#autocomplete').should('have.value', 'Republic of the Congo');
  });

  it('Checkboxes - Check all checkboxes and validate', function() {
    automationPracticePage.getCheckboxes().check().should('be.checked');
  });

  it('Checkboxes - Uncheck first checkbox and validate others remain checked', function() {
    automationPracticePage.getCheckboxes().first().uncheck();
    automationPracticePage.getCheckboxes().eq(1).should('be.checked');
    automationPracticePage.getCheckboxes().eq(2).should('be.checked');
  });

  it('Show/Hide - Validate hide/show functionality', function() {
    automationPracticePage.getHideButton();
    cy.get('#displayed-text').should('not.be.visible');
    automationPracticePage.getShowButton();
    cy.get('#displayed-text').should('be.visible');
  });

  });
