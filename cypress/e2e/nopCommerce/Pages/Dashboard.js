class Dash {

        validateTitle(){
            cy.title().should('contains','Dashboard / nopCommerce administration')
        }
}

export default Dash;