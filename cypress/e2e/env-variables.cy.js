describe('Variáveis do ambiente', () => {
    env: {
        id: 500
    }
  it('Imprimir variáveis do ambiente', () => {
    cy.log(Cypress.env('user'))
    cy.log(Cypress.env('host'))
    cy.log(Cypress.env('api_server'))
    cy.log(Cypress.env('id'))
  })
})