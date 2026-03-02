describe('Hooks', () => {
    before(() => {
        cy.log('Executado antes de todos os testes');
    })

    beforeEach(() => {
        cy.log('Executado antes de cada teste');
    })

    afterEach(() => {
        cy.log('Executado depois de cada teste');
    })

    after(() => {
        cy.log('Executado depois de todos os testes');
    })

    it('Teste 1', () => {
        cy.log('**Executando o teste 1**');
    })

    it('Teste 2', () => {
        cy.log('**Executando o teste 2**');
    })

    it('Teste 3', () => {
        cy.log('**Executando o teste 3**');
    })
})