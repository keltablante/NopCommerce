import Global from '../customMethods/global'
import Login from '../Pages/Login'
import Dash from '../Pages/Dashboard'

describe('Test upload file in settings', () => {

    const global = new Global(), login = new Login(), dash = new Dash();
    let data, objects;


    beforeEach(() => {
        cy.fixture('data.json').then((genData) => {
          data = genData;
        });
        cy.fixture('objects.json').then((genObjects) => {
          objects = genObjects;
        });
    
      });

    it('Test Upload File', () => {
        global.visit(data.nopCommerceURL)
        global.defaultViewPort()   
        //LOGIN
        login.validateTitle()
        cy.quickLogin(data.email, data.password)

        //VALIDATE DASHBOARD
        dash.validateTitle()
        global.verify(objects.dashboard.dashBoard)
        

        //NAVIGATE TO SETTINGS
        global.click(objects.dashboard.lnkConfiguration)
        global.click(objects.Configuration.lnkSettings)
        global.click(objects.Configuration.Settings.lnkGeneralSettings)
        global.upload(objects.Configuration.Settings.GeneralSettings.btnUploadFile, 'sample.png')
        global.verify(objects.Configuration.Settings.GeneralSettings.spnSamplePng)
    });
});