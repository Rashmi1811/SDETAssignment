
@feature
Feature: Upskill eLearning Sign Up functionality
  Background: This step will always execute before my test case

	@Register @TestCase1
  Scenario Outline: verify the up skill Registration functionality
    Given User in on Upskill HomePage
    When User clicks on Sign up!
    Then Registration form should be displayed
    When User enters  "<First Name>", "<Last Name>", "<e-Mail>","<User name>", "<Pass>", "<Confirm password>"
    And Clicks on Register
    Then User should be successfully registered.

    Examples: 
      | First Name | Last Name| e-Mail  								|User name	 	 |Pass 				|Confirm password |
      | Rashmi 		 |     Pal  | rashmipal1811@gmail.com |Rashmi1814	 |Rashmi18111 |Rashmi18111 	  	|
      
 	@Login @TestCase2
	Scenario Outline: Verify Login with the registered id
    Given User in on Upskill HomePage
    When User enters  "<User name>",  "<Pass>"
    And Clicks on Login
    Then User should be successfully Logged in
    Examples:
    
    |User name	 	 |Pass 				|
    |Rashmi18111	 |Rashmi18111 |
    
   @SendEmail @TestCase3
   Scenario Outline: Verify the email functionality
   Given User in on Upskill HomePage
    When User enters  "<User name>",  "<Pass>"
    And Clicks on Login
    Then User should be successfully Logged in
   When User Clicks on inbox
   And Clicks on Compose
   Then A new window for composing message is dispayed 
   When User enter "<Send to>", "<Subject>"
   And Clicks on Send message
   Then Message should be sent successfully
   
   Examples:
    
    |User name 	  |Pass 				|Send to	 	               |Subject       		 |
    |Rashmi18111	|Rashmi18111  |rashmipal1811@gmail.com	 |Welcome to Testing |