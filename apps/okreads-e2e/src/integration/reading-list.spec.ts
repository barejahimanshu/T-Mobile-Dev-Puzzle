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

  it('Then: I should see undo button',()=>{
    cy.get('#mat-input-0').type('Java');
    cy.get('[data-testing="add-to-reading-list"]').first().click();
    cy.get('[data-testing="add-to-reading-list"]').first().should("be.disabled");
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('[data-testing="remove-from-reading-list"]').first().click();
    cy.wait(300);
    cy.contains('button', 'UNDO').click();
});

});
