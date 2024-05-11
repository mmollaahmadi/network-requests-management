describe('Network Requests Management App', () => {
  it('Correct API request', () => {
    cy.intercept('GET', 'https://httpstat.us/200?sleep=3000').as('correctRequest');
    cy.visit('http://localhost:3000/');
    cy.wait('@correctRequest').then(({ response }) => {
      cy.get('button').contains('Test Correct API').click();
      cy.get('.inline-grid').should('contain.text', `code: ${response?.body.code}`);
      cy.get('.inline-grid').should('contain.text', `description: ${response?.body.description}`);
    });
  });

  it('Wrong API request', () => {
    cy.intercept('GET', 'https://httpstat.us/500?sleep=2000').as('wrongRequest');
    cy.visit('http://localhost:3000/');
    cy.wait('@wrongRequest').then(({ response }) => {
      cy.get('button').contains('Test Wrong API').click();
      cy.get('.App').should('contain.text', 'Error:');
    });
  });
});
