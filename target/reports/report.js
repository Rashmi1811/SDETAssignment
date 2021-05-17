$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register.feature");
formatter.feature({
  "line": 3,
  "name": "Upskill eLearning Sign Up functionality",
  "description": "",
  "id": "upskill-elearning-sign-up-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@feature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "verify the up skill Registration functionality",
  "description": "",
  "id": "upskill-elearning-sign-up-functionality;verify-the-up-skill-registration-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Register"
    },
    {
      "line": 6,
      "name": "@TestCase1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User in on Upskill HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Sign up!",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Registration form should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters  \"\u003cFirst Name\u003e\", \"\u003cLast Name\u003e\", \"\u003ce-Mail\u003e\",\"\u003cUser name\u003e\", \"\u003cPass\u003e\", \"\u003cConfirm password\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Clicks on Register",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should be successfully registered.",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "upskill-elearning-sign-up-functionality;verify-the-up-skill-registration-functionality;",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name",
        "e-Mail",
        "User name",
        "Pass",
        "Confirm password"
      ],
      "line": 16,
      "id": "upskill-elearning-sign-up-functionality;verify-the-up-skill-registration-functionality;;1"
    },
    {
      "cells": [
        "Rashmi",
        "Pal",
        "rashmipal1811@gmail.com",
        "Rashmi1813",
        "Rashmi18111",
        "Rashmi18111"
      ],
      "line": 17,
      "id": "upskill-elearning-sign-up-functionality;verify-the-up-skill-registration-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "This step will always execute before my test case",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 17,
  "name": "verify the up skill Registration functionality",
  "description": "",
  "id": "upskill-elearning-sign-up-functionality;verify-the-up-skill-registration-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Register"
    },
    {
      "line": 2,
      "name": "@feature"
    },
    {
      "line": 6,
      "name": "@TestCase1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User in on Upskill HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Sign up!",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Registration form should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters  \"Rashmi\", \"Pal\", \"rashmipal1811@gmail.com\",\"Rashmi1813\", \"Rashmi18111\", \"Rashmi18111\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Clicks on Register",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should be successfully registered.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_in_on_Upskill_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_clicks_on_Sign_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.registration_form_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rashmi",
      "offset": 14
    },
    {
      "val": "Pal",
      "offset": 24
    },
    {
      "val": "rashmipal1811@gmail.com",
      "offset": 31
    },
    {
      "val": "Rashmi1813",
      "offset": 57
    },
    {
      "val": "Rashmi18111",
      "offset": 71
    },
    {
      "val": "Rashmi18111",
      "offset": 86
    }
  ],
  "location": "stepDefinition.user_enters(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.clicks_on_Register()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_should_be_successfully_registered()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify Login with the registered id",
  "description": "",
  "id": "upskill-elearning-sign-up-functionality;verify-login-with-the-registered-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@TestCase2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User in on Upskill HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User enters  \"\u003cUser name\u003e\",  \"\u003cPass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should be successfully Logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "upskill-elearning-sign-up-functionality;verify-login-with-the-registered-id;",
  "rows": [
    {
      "cells": [
        "User name",
        "Pass"
      ],
      "line": 27,
      "id": "upskill-elearning-sign-up-functionality;verify-login-with-the-registered-id;;1"
    },
    {
      "cells": [
        "Rashmi18111",
        "Rashmi18111"
      ],
      "line": 28,
      "id": "upskill-elearning-sign-up-functionality;verify-login-with-the-registered-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "This step will always execute before my test case",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 28,
  "name": "Verify Login with the registered id",
  "description": "",
  "id": "upskill-elearning-sign-up-functionality;verify-login-with-the-registered-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@TestCase2"
    },
    {
      "line": 2,
      "name": "@feature"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User in on Upskill HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User enters  \"Rashmi18111\",  \"Rashmi18111\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should be successfully Logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_in_on_Upskill_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rashmi18111",
      "offset": 14
    },
    {
      "val": "Rashmi18111",
      "offset": 30
    }
  ],
  "location": "stepDefinition.user_enters(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.clicks_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_should_be_successfully_Logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Verify the email functionality",
  "description": "",
  "id": "upskill-elearning-sign-up-functionality;verify-the-email-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@SendEmail"
    },
    {
      "line": 30,
      "name": "@TestCase3"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User in on Upskill HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User enters  \"\u003cUser name\u003e\",  \"\u003cPass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User should be successfully Logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User Clicks on inbox",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Clicks on Compose",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "A new window for composing message is dispayed",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User enter \"\u003cSend to\u003e\", \"\u003cSubject\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Clicks on Send message",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Message should be sent successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "upskill-elearning-sign-up-functionality;verify-the-email-functionality;",
  "rows": [
    {
      "cells": [
        "User name",
        "Pass",
        "Send to",
        "Subject"
      ],
      "line": 45,
      "id": "upskill-elearning-sign-up-functionality;verify-the-email-functionality;;1"
    },
    {
      "cells": [
        "Rashmi18111",
        "Rashmi18111",
        "rashmipal1811@gmail.com",
        "Welcome to Testing"
      ],
      "line": 46,
      "id": "upskill-elearning-sign-up-functionality;verify-the-email-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "This step will always execute before my test case",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 46,
  "name": "Verify the email functionality",
  "description": "",
  "id": "upskill-elearning-sign-up-functionality;verify-the-email-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@SendEmail"
    },
    {
      "line": 30,
      "name": "@TestCase3"
    },
    {
      "line": 2,
      "name": "@feature"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User in on Upskill HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User enters  \"Rashmi18111\",  \"Rashmi18111\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User should be successfully Logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User Clicks on inbox",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Clicks on Compose",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "A new window for composing message is dispayed",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User enter \"rashmipal1811@gmail.com\", \"Welcome to Testing\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Clicks on Send message",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Message should be sent successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_in_on_Upskill_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rashmi18111",
      "offset": 14
    },
    {
      "val": "Rashmi18111",
      "offset": 30
    }
  ],
  "location": "stepDefinition.user_enters(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.clicks_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_should_be_successfully_Logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_Clicks_on_inbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.clicks_on_Compose()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.a_new_window_for_composing_message_is_dispayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "rashmipal1811@gmail.com",
      "offset": 12
    },
    {
      "val": "Welcome to Testing",
      "offset": 39
    }
  ],
  "location": "stepDefinition.user_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.clicks_on_Send_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.message_should_be_sent_successfully()"
});
formatter.result({
  "status": "skipped"
});
});