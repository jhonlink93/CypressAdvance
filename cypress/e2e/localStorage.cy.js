describe('localStorage', () => {

    beforeEach(() => {
        cy.session('nueva sesion', () => {
            cy.visit('https://todo-cypress-iota.vercel.app/')
            localStorage.setItem('react_todo_ids', JSON.stringify(['titulo prueba con set item']))
            localStorage.setItem('titulo prueba con set item', JSON.stringify({
                title: 'titulo prueba con set item',
                id: 'titulo prueba set item',
                complete: false,
                description: 'descripcion de prueba setitem cypress'
            }))
        })
        cy.visit('https://todo-cypress-iota.vercel.app/')

    })
    it('crear una tarea manual', () => {
        cy.get('#title').type('Titulo de prueba localStorage')
        cy.get('#description').type('Una descripcion de prueba cypress')
        cy.contains('Create').click()
        cy.contains('Titulo de prueba localStorage')
        cy.reload()
        cy.contains('Titulo de prueba localStorage').then(() => {
            expect(localStorage.getItem('Titulo de prueba localStorage')).to.exist
        })
        cy.get('#Titulo\\ de\\ prueba\\ localStorage').last().click().then(() => {
            expect(localStorage.getItem('Titulo de prueba localStorage')).to.not.exist
        })
        //limpiar local
        cy.clearLocalStorage('Titulo de prueba localStorage')
    })
    it('comprobar local con set cypress', () => {
        cy.contains('titulo prueba con set item').then(() => {
            expect(localStorage.getItem('titulo prueba con set item')).to.exist
        })
        cy.clearAllLocalStorage()
        cy.contains('Remove').click().then(() => {
            //limpiar local
            expect(localStorage.getItem('titulo prueba con set item')).to.not.exist
        })
    })
})