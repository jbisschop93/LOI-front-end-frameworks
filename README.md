# Real Estate Works reporting prototype app

## Description
This is a prototype application for Real Estate Works, and does not represent the final product yet. 

If Real Estate Care gives us the job, we first need to futher discuss their vision and wishes for this project and check with them if the applications matches this so far before futher developing.

This prototype should however be able to help us with this process.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Security
### API
For the prototype we are using [My-JSON-Server](https://my-json-server.typicode.com), this API is only for demo purpose and does have its limitations.

In our prototype the API will also return the users passwords and 2 factor authentication codes (these parameters are prefixed by `tmp`) in order to  simulate an user login.

In the real word the API should NEVER return a password (even when its encrypted), this should be changed before taking this application into production.

Also: this API returns the assigned and executed reports without futher validation of the user, which means everyone can access these reports without logging in when approaching the API without app.

Before taking this application in production it should be atleast be using an API which:
- Returns an "user token" or "session id" at the initial login request when the credentials match (instead of returning an user object).
- Have a seperated API call validating the 2 factor authenthication code (instead of just providing the key already to the client which makes it volurnable)
- Validate every user related API Call with the provided user token making it impossible to retrieve data without being logged in.


### Login
- This prototypes will validate the users password client side (since there is no real API)

In production the API should not be able to return any user info without proper authentication.

- The users password is stored in localStorage in order for the applications "autologin" feature, which makes in volurnable (passwords shouldnt be stored clientside). This should be converted to an user token or session id handled serverside in production.

### Other
- Component properties are not specified as this is a prototype, these should have proper (type) validation combined in production.

- The reports 'test procedure' field is not validated at this moment, but is converted to a link which may makes it volurnable for HTML injections. This should be validated serverside in production.

## Usability and accessibility
We did the following in order to provide the user a smooth user experience:

- Application is simple by design, navigation possible by a menu button (always visible when logged in) and the icons from the homescreen (both screens use the same icons to make the features recognizable)
- The applications always shows a "back" button at the top, so when the user navigated to any other route then home: the user will always feel he is in control and can return anytime to their homescreen.
- Auto login (using local storage), to avoid the user requires to login every single time
- A support button is shown on every page, allowing the user to look at the knowledgebase or contact the service desk any time neccessary.

The final version should have:
- A tutorial mode, which starts after the first login
- Help markers near the input fields at the report editor, explaining the expected user input
- Proper error handling with proper message dialogs (no alert boxes)
- Proper API error handling (in case of a bad internet connection for e.x.)
- A "Quick support" button showing up a chatbox with direct support
- A loading icon showing during API requests

After the first release:
The production version should also be tested by a test panel later on (for example: 5 - 10 users who use the application for 2 months first as a pilot): after this we may need to finetune the application according to the test panels feedback before actually releasing it for all employees.

### WCAG 2.1:
- The final version should probably have a "high contrast" mode
- The final version should be able to scale the contents (larger and smaller)
- Since this application is going to be used internally (employee only), this is may not be required: but we need to ask Real Estate Care if the application is going to be used by phone, or also needs to be used from desktop/tablets combined with screen readers. If so: we need to define all alt, title and aria-labels allowing the application being read by a screenreader.