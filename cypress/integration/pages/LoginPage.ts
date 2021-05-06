export default class LoginPage{
    //create variables for element locators
    PATH = "/login"
    HEADER = "h2"
    USERNAME = "#username"
    PASSWORD = "#password"
    BTN_LOGIN = "#login button"
    BTN_LOGOUT = "#content a"
    ERROR_MESSAGE = "#flash"

    visitLoginPage(){
        cy.visit(this.PATH)
        cy.on('uncaught:exception',(err, runnable)=>{
            return false
        })
        cy.get(this.HEADER,{timeout:5000}).should('be.visible')
    }

    enterUsername(username:string){
        cy.get(this.USERNAME).clear()
        cy.get(this.USERNAME).type(username)
    }

    enterPassword(password:string){
        cy.get(this.PASSWORD).clear()
        cy.get(this.PASSWORD).type(password)
    }

    clickLogin(){
        cy.get(this.BTN_LOGIN).click()
    }

    successfulLogin(){
        cy.get(this.BTN_LOGOUT).should('be.visible')
    }

    unsuccessfulLogin(){
        cy.get(this.ERROR_MESSAGE).should('exist')
    }
}