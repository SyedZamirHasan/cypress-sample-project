Feature: Login Page

    Scenario: Login Success
    Given User is on login page
    When User enters correct username "tomsmith"
    And User enters correct password "SuperSecretPassword!"
    And User clicks on login button
    Then User is successfully loggedIn

    Scenario: Login Unsuccessful
    Given User is on login page
    When User enters incorrect username "zamir"
    And User enters correct password "SuperSecretPassword"
    And User clicks on login button
    Then User is not loggedIn