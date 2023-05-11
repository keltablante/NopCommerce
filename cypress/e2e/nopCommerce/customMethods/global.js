const { faker } = require('@faker-js/faker');



class Global {


  //Faker: Generate random data =====================================================
          name = faker.name.findName()
          past = faker.date.past()
          future = faker.date.future()
          sentence = faker.lorem.sentence()
          word = faker.lorem.word()

          randomizer(input) {
              if (input.hasOwnProperty('length')) {
                return input
              } else if (input instanceof Date && typeof input.getTime === 'function') {
                return input.toLocaleDateString()
              } else {
                return input
              }
            }
  //=================================================================================
  
    defaultViewPort(){
        cy.viewport('macbook-16')
    }

    type(loc,text){
        cy.xpath(loc, {force:true}).should('exist')
        .clear({force:true})
        // .click({force:true})
        // .type('{selectall}{backspace}', {force:true})
        .type(text, {force:true})
        .should('have.value',text)
    }

    click(loc){
        cy.xpath(loc).click({force: true}).should('exist')
    }

    verify(loc){
        cy.xpath(loc).should('exist')
    }

    visit(URL){
        cy.visit(URL)
    }

    check(loc){
        cy.xpath(loc).check({force: true})
            .should('be.checked')
            .should('exist')
    }

    select(loc, input){
      cy.xpath(loc, {force:true}).select(input)
      .should('exist')
    }
    expectElement(loc){
      expect(cy.xpath(loc)).to.exist;
    }

    upload(loc,fileLoc){
      cy.xpath(loc).attachFile(fileLoc)
    }

    findImgAndProceed(imgSelector) {
      cy.xpath(imgSelector)
        .then(($img) => {
          if ($img.length) {
            cy.log('Image found. Proceeding...')
          } else {
            cy.log('Image not found. Waiting for 2 seconds...')
            cy.wait(2000)
          }
        })
    }

}

export default Global;
