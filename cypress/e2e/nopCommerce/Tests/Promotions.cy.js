import Global from '../customMethods/global'
import Login from '../Pages/Login'
import Dash from '../Pages/Dashboard'
import Discount from '../Pages/Discount'


describe('Test Discount', () => {

  const global = new Global(), login = new Login(), dash = new Dash(), discount = new Discount();
  let data, objects;
   

  beforeEach(() => {
    cy.fixture('data.json').then((genData) => {
      data = genData;
    });
    cy.fixture('objects.json').then((genObjects) => {
      objects = genObjects;
    });

  });

  it('TC#1: Add discount (Basic)', () => {
    global.visit(data.nopCommerceURL)
    global.defaultViewPort()   
    //LOGIN
    login.validateTitle()
    cy.quickLogin(data.email, data.password)

    //VALIDATE DASHBOARD
    dash.validateTitle()
    global.verify(objects.dashboard.dashBoard)

    //NAVIGATE TO DISCOUNT PAGE
    global.click(objects.dashboard.lnkPromotions)
    global.click(objects.dashboard.lnkDiscounts)
    discount.validateTitle()

    //ADD NEW DISCOUNT (BASIC)
    global.click(objects.discount.btnAddNewDiscount)
    discount.basicMode()
    discount.validateAddNewTitle()
    global.type(objects.discount.txtName, global.randomizer(global.word))
    global.select(objects.discount.slctDiscountType, 'Assigned to shipping')
    global.check(objects.discount.chkUsePercentage)
    global.click(objects.discount.clkDiscountAmountPercentage)
    global.type(objects.discount.txtDiscountAmountPercentage, 20)
    global.check(objects.discount.chkRequiresCouponCode)
    global.type(objects.discount.txtCouponCode, global.randomizer(global.word))
    global.click(objects.discount.btnSave)

    //VALIDATE NEWLY ADDED DISCOUNT
    discount.verifyNewlyAddedDiscount(`${global.randomizer(global.word)}`)

    //LOGOUT
    global.click(objects.btnLogout)
  })

  it('TC#2: Add discount (Advanced)', () => {
    global.visit(data.nopCommerceURL)
    global.defaultViewPort()   
    //LOGIN
    login.validateTitle()
    cy.quickLogin(data.email, data.password)
        
    //VALIDATE DASHBOARD
    dash.validateTitle()
    global.verify(objects.dashboard.dashBoard)

    //NAVIGATE TO DISCOUNT PAGE
    global.click(objects.dashboard.lnkPromotions)
    global.click(objects.dashboard.lnkDiscounts)
    discount.validateTitle()

    //ADD NEW DISCOUNT (ADVANCED)
    global.click(objects.discount.btnAddNewDiscount)
    discount.advancedMode()
    discount.validateAddNewTitle()
    global.type(objects.discount.txtName, global.randomizer(global.word))
    global.select(objects.discount.slctDiscountType, 'Assigned to shipping')
    global.check(objects.discount.chkUsePercentage)
    global.click(objects.discount.clkDiscountAmountPercentage)
    global.type(objects.discount.txtDiscountAmountPercentage, 20)
    global.click(objects.discount.clkMaxDiscountAmountPercentage)
    global.type(objects.discount.txtMaxDiscountAmountPercentage, 25)
    global.check(objects.discount.chkRequiresCouponCode)
    global.type(objects.discount.txtCouponCode, global.randomizer(global.word))
    global.type(objects.discount.txtStartDate, global.randomizer(global.past))
    global.type(objects.discount.txtEndDate, global.randomizer(global.future))
    global.check(objects.discount.chkIsCumulative)
    global.select(objects.discount.slctDiscountLimitation, 'N times only')
    global.click(objects.discount.spnNtimesIncreaseValue)
    global.type(objects.discount.txtAdminComment, global.randomizer(global.sentence))
    global.click(objects.discount.btnSaveAndContinue)
    discount.validateSavingSuccessfulViaElementText()

    //ADD NEW REQUIREMENT
    discount.expandRequirements()
    global.select(objects.discount.requirements.slctDiscountRequirementType, 'Add requirement group')
    global.type(objects.discount.requirements.txtGroupName, global.randomizer(global.word))
    global.click(objects.discount.requirements.btnSaveRequirement)
    discount.verifyNewlyAddedRequirement(`${global.randomizer(global.word)}`)

    global.click(objects.discount.requirements.lnkDiscounts)
    discount.verifyNewlyAddedDiscount(`${global.randomizer(global.word)}`)
 
    // LOGOUT
    global.click(objects.btnLogout)
  });

  it('TC#3: Search via coupon code && discount name - validate discount', () => {
    global.visit(data.nopCommerceURL)
    global.defaultViewPort()   
    //LOGIN
    login.validateTitle()
    cy.quickLogin(data.email, data.password)
        
    //VALIDATE DASHBOARD
    dash.validateTitle()
    global.verify(objects.dashboard.dashBoard)

    //NAVIGATE TO DISCOUNT PAGE
    global.click(objects.dashboard.lnkPromotions)
    global.click(objects.dashboard.lnkDiscounts)
    discount.validateTitle()

    //SEARCH USING FILTER
    global.type(objects.discount.filter.txtCouponCode, '123')
    global.type(objects.discount.filter.txtDiscountName, 'Sample discount with coupon code')
    global.click(objects.discount.filter.btnSearch)
    discount.validateSearchedDiscount()


    //LOGOUT
    global.click(objects.btnLogout)
  });
});



