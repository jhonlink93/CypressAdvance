
describe('dispositivos moviles', () => {
    const DEVICES = [
        { viewport: "macbook-15", type: "desktop" },
        { viewport: "ipad-2", type: "mobile" },
        { viewport: [1280, 720], type: "desktop" },
        { viewport: [375, 667], type: "mobile" },
    ];

    DEVICES.forEach((device) => {
        const { viewport, type } = device
        const [width, height] = Array.isArray(viewport) ? viewport : [viewport]

        it(`Validando device ${viewport}`, () => {
            console.log(width, height)
            cy.viewport(width, height)
            cy.visit('/')

            if (type === 'mobile') {
                cy.contains('Safari').should('not.be.visible')
            } else {
                cy.contains('Safari').should('be.visible')
            }
        })
    })
})