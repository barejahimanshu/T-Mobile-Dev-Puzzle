describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });


it('Then: I should be able to mark a book as finished by clicking a button',()=>{
  cy.get('#mat-input-0').type('Python');
  cy.get('form').submit();
  cy.get('[data-testing="add-book-to-reading-list"]').first().click();
  cy.get('[data-testing="add-book-to-reading-list"]').first().should("be.disabled");
  cy.get('[data-testing="toggle-reading-list"]').click();
  cy.get('[data-testing="mark-as-finished-button"]').first().click();
  cy.get('[data-testing="book-finished-label"]').should("exist");
  cy.wait(300);
  cy.contains('button', 'DONE').click();
});

});
