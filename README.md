# Real Estate Works reporting prototype app

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
- Returns an "user token" at the initial login request when the credentials match (instead of returning an user object).
- Have a seperated API call validating the 2 factor authenthication code (instead of just providing the key already to the client)
- Validate every user related API Call with the provided user token making it impossible to retrieve data without being logged in.


### Login
- This prototypes will validate the users password client side (since there is no real API)

In production the API should not be able to return any user info without proper authentication.

- The users password is stored in localStorage in order for the applications "autologin" feature, which makes in volurnable (passwords shouldnt be stored clientside). This should be atleast converted to an user token, maybe even with machine or IP  restrictions before using in production.

### Other
- Component properties are not specified as this is a prototype, these should have proper (type) validation combined in production.

- Inspection technical installation viewer component, or API should validate URL for 'test procedure' link before putting its content on the webpage (these links could contain javascript: links for example, injecting code into the users page).

## Usability
Please note that this is a prototype only, the final version should have:
- A tutorial mode, which starts after the first login
- Proper error handling with proper message dialogs (no alert boxes)
- Proper API error handling (in case of a bad internet connection for e.x.)
- A "Quick support" button showing up a chatbox with direct support
- A loading icon showing during API requests

### WCAG 2.1:
- The final version should probably have a "high contrast" mode
- The final version should be able to scale the contents (larger and smaller)
