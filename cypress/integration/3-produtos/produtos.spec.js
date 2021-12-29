
const specTitle = require("cypress-sonarqube-reporter/specTitle");

describe(specTitle('Primeiro Teste'), () => {
  it('Testar menu', () => {
    cy.visit('http://localhost:4200/produtos')
   const titulo = cy.get('[data-cy=textoMenu]');
   titulo.should('be.visible');
    expect(true).to.equal(true)
  })
});