
describe('cookies', function () {

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('/')
            cy.setCookie('nombre', 'javier')
        })
    })
    it.skip('Obtener cookies', function () {
        cy.getCookies().should('be.empty')
    })
    it('agregar una cookie', () => {
        cy.session('user', () => {
            cy.setCookie('nombre2', 'Javier')
            cy.getCookies().should('have.length.at.least', 1)
        })
    })
    it('obtner cookie', () => {
        cy.setCookie('nombre2', 'Manuel')
        cy.getCookie('nombre').should('have.a.property', 'value', 'javier')
        cy.getCookies().should('have.length.at.least', 2)
    })
})