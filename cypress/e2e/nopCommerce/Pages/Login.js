import Global from '../customMethods/global'


const {login: { txtEmail, txtPassword }} = require('../../../fixtures/objects.json')
const global = new Global();

class Login {

        inputEmail(email){
            global.type(txtEmail, email)
        }
        inputPassword(password){
            global.type(txtPassword, password)
        }

        validateTitle(){
            cy.title().should('eq','Your store. Login')
        }
}

export default Login;