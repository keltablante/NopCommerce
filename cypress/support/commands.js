import 'cypress-file-upload'
import Global from '../e2e/nopCommerce/customMethods/global'
import Login from '../e2e/nopCommerce/Pages/Login'

require('@4tw/cypress-drag-drop')  //drag and drop
require('cypress-iframe')
/// <reference types="cypress" />
/// <reference types="cypress-xpath"/>
require('cypress-xpath')
const global = new Global();
const login = new Login();
const {login: { btnLogin }} = require('../fixtures/objects.json')


Cypress.Commands.add('clickElementWithText', (text)=>{
    cy.get('*').contains(text).click()
	})

Cypress.Commands.add('typeOnElementWithId', (id, input)=>{
    cy.get(`input[id="${id}"]`).clear().type(input)
    })


Cypress.Commands.add('customHandleIFrame', function(id){
    return cy.get(id)
            .its('0.contentDocument.body')
            .then(   cy.wrap    )
})

Cypress.Commands.add('quickLogin', (email, password)=>{
    login.inputEmail(email)
    login.inputPassword(password)
    global.click(btnLogin)
})
 