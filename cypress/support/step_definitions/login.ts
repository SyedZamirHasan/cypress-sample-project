import LoginPage from '../../integration/pages/LoginPage'
import {When, Given, Then} from "cypress-cucumber-preprocessor/steps"

const loginPage = new LoginPage()

When('User enters correct username {string}',(username)=>{
    loginPage.enterUsername(username)
})

When('User enters correct password {string}',(password)=>{
    loginPage.enterPassword(password)
})

When('User enters incorrect username {string}',(username)=>{
    loginPage.enterUsername(username)
})

When('User enters correct password {string}',(password)=>{
    loginPage.enterPassword(password)
})

When('User clicks on login button',()=>{
    loginPage.clickLogin()
})

Then('User is successfully loggedIn',()=>{
    loginPage.successfulLogin()
})

Then('User is not loggedIn',()=>{
    loginPage.unsuccessfulLogin()
})

Given('User is on login page',()=>{
    loginPage.visitLoginPage()
})
