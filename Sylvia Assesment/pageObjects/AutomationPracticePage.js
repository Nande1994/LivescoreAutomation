// cypress/pageObjects/AutomationPracticePage.js
class AutomationPracticePage {
    visit() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    }

    getRadioButton(index) {
        return cy.get(`input[value="radio${index}"]`);
    }

    getSuggestionInput() {
        return cy.get('#autocomplete');
    }

    getCheckbox(index) {
        return cy.get(`#checkBoxOption${index}`);
    }

    getHideButton() {
        return cy.get('#hide-textbox');
    }

    getShowButton() {
        return cy.get('#show-textbox');
    }

    getTextBox() {
        return cy.get('#displayed-text');
    }

    getTableAmount(name, city) {
        return cy.get(`table[name="courses"] tr:contains(${name}):contains(${city}) td:nth-child(3)`);
    }

    getTotalAmount() {
        return cy.get('table[name="courses"] tr td:nth-child(3)');
    }

    getIframe() {
        return cy.get('#courses-iframe');
    }
}

export default AutomationPracticePage;
