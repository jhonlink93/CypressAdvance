describe('test con intercept', () => {
    it('prueba intercept', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto')
            .then((response) => {
                expect(response.status).to.have.eq(200)
                expect(response.body).to.have.property('name', 'ditto')
                cy.log(response.body)
            });
    });
    it('prueba intercept simple', () => {
        cy.intercept(
            'GET',
            'https://pokeapi.co/api/v2/pokemon-species/1'
        ).as('bulbasaur');
        cy.visit('/');
        cy.contains('Bulbasaur')
            .parent()
            .parent()
            .within((element) => {
                cy.wrap(element).contains('Más detalles').click()
            })
        cy.wait('@bulbasaur').then((interception) => {
            cy.log(interception)
            expect(interception.response.body).to.have.property('name', 'bulbasaur')
            expect(interception.response.statusCode).eq(200)
        })
        //cy.wait('@bulbasaur').its('response.statusCode').should('eq', 200)
    });

    it('Probar intercept forzar fallo', () => {
        cy.intercept(
            'GET',
            'https://pokeapi.co/api/v2/pokemon-species/1', { forceNetworkError: true }
        ).as('error');
        cy.visit('/');
        cy.contains('Bulbasaur')
            .parent()
            .parent()
            .within((element) => {
                cy.wrap(element).contains('Más detalles').click()
            })
        cy.wait('@error').should('have.a.property', 'error')
    });
    it('prueba intercept cambiando propiedades', () => {
        cy.intercept(
            'GET',
            'https://pokeapi.co/api/v2/pokemon-species/1', { statusCode: 200 },
        ).as('picachu');
    });
})