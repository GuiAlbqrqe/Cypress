describe('Variáveis do ambiente', () => {

  beforeEach(() => {
    Cypress.env('teste', 'Valor do teste')
  })

  it('Imprimir variáveis do ambiente', () => {
    cy.log(Cypress.env('user'))
    cy.log(Cypress.env('host'))
    cy.log(Cypress.env('api_server'))
    cy.log(Cypress.env('teste'))
  })
})