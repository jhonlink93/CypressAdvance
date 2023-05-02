describe('trabjando con xpaths', () => {
    it('obtener con CCSS selector', () => {
        cy.visit('/')
        cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1').should('contain', 'Bulbasaur')
    })
    it('obtener con XPATH ', () => {
        cy.visit('/')
        cy.xpath('//h1[contains(text(),"Bulbasaur")]').should('contain', 'Bulbasaur')
    })
})