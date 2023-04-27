describe('localStorage', () => {

    it('crear una tarea', () => {
        cy.visit('https://todo-cypress-iota.vercel.app/')
        cy.get('#title').type('Titulo de prueba localStorage')
        cy.get('#description').type('Una descripcion de prueba cypress')
        cy.contains('Create').click()
    })
})