import{elements as el} from './elements';

class Header{
    validarQueCarrinhoPossuiItens(quantidade) {
        cy.get(el.CartBadge)
        .should('be.visible')
        .and('have.text', quantidade.toString());
    }

    navegarParaCarrinho() {
        cy.get(el.cartContainer).click();
    }

    validarQueCarrinhoNaoPossuiItens() {
        cy.get(el.CartBadge).should('not.exist');

        cy.screenshot();
    }
}

export default new Header();