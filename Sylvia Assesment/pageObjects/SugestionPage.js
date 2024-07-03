class SuggestionPage {
    typeAndSelect(value) {
      cy.get('#autocomplete').type(value)
      cy.get('.ui-menu-item').contains(value).click()
    }
  
    clearAndTypeSelect(value) {
      cy.get('#autocomplete').clear().type(value)
      cy.get('.ui-menu-item').first().click()
    }
  }
  
  export default SuggestionPage;
  