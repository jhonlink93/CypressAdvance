describe('flaky test', () => {
    it('single query command', () => {
        cy.visit('/')
        //reintenta el selector por 4000ms o hasta que el elemento con el selector y el texto aparezca
        cy.contains('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1', 'Bulbasaur')
        //si lo hacemos por aparte primero obtiene el elemento sin saber si es elemento correcto:
        //cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1').contains('Bulbasaaur')

    })
    it.skip('alternar comando con aserciones', () => {
        //al alternar una asercion con un comando cypress reintenta el comando default 4000ms 
        cy.get('#submit').should('not.be.disabled').click()
    })
})