describe('Home page', () => {
  it('It should visit Home page', () => {
    cy.visit('/');
    cy.findByText('PERSEVERANCE').should('exist');
  });

  it('Check for visible image', () => {
    cy.get('[data-slide-index="1"]').find('img').isVisible();
    cy.get('[data-slide-index="2"]').find('img').isVisible(false);
  });

  it('Controlling speed of slide show via query', () => {
    const SPEED = 1000;
    cy.visit(`/?speed=${SPEED}`);
    cy.get('[data-slide-index="1"]').find('img').isVisible();
    cy.get('[data-slide-index="2"]').find('img').isVisible(false);
    cy.wait(SPEED);
    cy.get('[data-slide-index="2"]').find('img').isVisible();
    cy.get('[data-slide-index="1"]').find('img').isVisible(false);
  });
});
