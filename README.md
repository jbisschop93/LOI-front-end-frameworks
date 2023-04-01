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
For the prototype we are using [My-JSON-Server](https://my-json-server.typicode.com), this API is only for demo purpose and does have some limitations.

In our case the API returns also the user's password, and 2 factor authenthication code (these parameters are prefixed by `tmp`) in order to  simulate an user login.

In the real word the API should NEVER return a password (even when its encrypted), this should be changed before taking this application into production.

This API also returns reports without futher validation, which means everyone can access these reports without logging in when approaching the API without app.

Before taking this API into production it should be able to:
- Return an "user token" at the initial login request when the credentials match (instead of returning an user object).
- Have a seperated API call validating the 2 factor authenthication code.
- Validate every report and user related API Call with the provided user token making it impossible to retrieve data without being logged in.


### Login
- This prototypes login will get a user object using the API matching the users given username, and then tries to match its password for logging in.

In the real word the API should not be able to return any user without proper authentication.

- The users password is stored in localStorage in order for the applications "autologin" feature, which makes in volurnable (passwords shouldnt be stored clientside). This should be atleast an user token in the near future.

### Other
- Component properties are not specified as this is a prototype, these should have proper validation before taking this into production.