import Global from '../customMethods/global'

const {discount: {tglMode, requirements:{iExpandRequirements}}} = require('../../../fixtures/objects.json')
const global = new Global();




class discount {

    verifyNewlyAddedDiscount(input){
        cy.xpath(`//tr[contains(@class, 'odd') or contains(@class, 'even')]//td[contains(text(), '${input}')]`)
        .should('exist')
    }

    verifyNewlyAddedRequirement(input){
        cy.xpath(`//i[contains(text(),'${input}')]`)
        .should('exist')
    }

    advancedMode(){
        cy.xpath(tglMode).then($checkbox => {
            if ($checkbox.prop('checked')) {
                cy.log('Toggle is set to Advanced');
            }
            else{
                cy.log('Toggle is set to Basic')
                global.click(tglMode)
                cy.log('Toggle is now set to Advanced');
            }
        });
    }

    basicMode(){
        cy.xpath(tglMode).then($checkbox => {
            if ($checkbox.prop('checked')) {
                cy.log('Toggle is set to Advanced');
                global.click(tglMode)
            }
            else{
                cy.log('Toggle is set to Basic')
            }
        });
    }
    validateTitle(){
        cy.title().should('eq','Discounts / nopCommerce administration')
    }

    validateAddNewTitle(){
        cy.title().should('eq','Add a new discount / nopCommerce administration')
    }
    validateSavingSuccessfulViaAlert(){
        cy.on('window:alert', (str) => {
            expect(str).to.equal('The new discount has been added successfully.asdasd');
          });
    }
    validateSavingSuccessfulViaElementText() {
        cy.xpath("//div[@class='alert alert-success alert-dismissable']")
          .should('contain.text', "The new discount has been added successfully.");
    }
    validateSearchedDiscount(){
        cy.xpath("//tr[contains(@class, 'odd') or contains(@class, 'even')]//td[contains(text(), 'Sample discount with coupon code')]")
        .should('exist')
    }
    expandRequirements(){
        cy.xpath(iExpandRequirements).then($xpath => {
            if ($xpath.hasClass('fa-plus') && !$xpath.hasClass('fa-minus')) {
                cy.log('requirement section is collapsed')
                cy.xpath(iExpandRequirements).click()
                cy.log('requirement section is now expanded')
            }
            else{
                cy.log('requirement section is already expanded')
                
            }
        });
    }
}




export default discount;