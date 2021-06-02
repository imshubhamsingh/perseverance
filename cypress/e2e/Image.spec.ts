describe('Image page', () => {
  it('It should visit Image page', () => {
    cy.visit('/0');
    cy.findByText('PERSEVERANCE').should('exist');
  });

  it('Check for visible image', () => {
    cy.get('img').should('be.visible');
  });

  it('If a user goes to image which is not available, rediect to 404', () => {
    const idx = 1000;
    cy.visit(`/${idx + 1}`);
    cy.findByRole('heading', { level: 1, name: '404' }).should('exist');
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/not-found`);
  });
});
