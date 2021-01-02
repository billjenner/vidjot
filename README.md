# jot ideas

- Track your list of ideas.

## Setup

> npm init
> answer questions
> entry point: app.js

- setup Mongo & Mongoose
  > npm install --save mongoose

-Express install and add to package.json

> npm install --save express

- nodemon to handle auto-restarts
  npm install -g nodemon

- Path to global modules

  > npm root -g

- middleware
- expressjs.com/en/guide/using-middleware.html

- handle bars
- handlebarsjs.com
- express handle bars
- https://github.com/ericf/express-handlebars
  > npm install express-handlebars --save

### Module to map input data to req.body

- body parser
- Parse incoming request bodies in a middleware before your handlers, available under the req.body property
  https://github.com/expressjs/body-parser
  > npm install --save body-parser

### Module to help override post to put

- Edit should be a put request, cannot do a put with a form - transform post <-> put
- method-override
  > npm install --save method-override

### Flash is express-session - authentication, toaster events

- express-session
  https://www.npmjs.com/package/express-session
- express-messages
  https://www.npmjs.com/package/express-messages
- express-flash
  https://www.npmjs.com/package/express-flash
  > npm install --save express-session
  > npm install --save connect-flash

### Passport - Local User Authentication

http://www.passportjs.org/

> npm install --save passport
> npm install --save passport-local

### install encryption for password

> npm install --save bcryptjs
