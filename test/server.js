require('dotenv').config({ path: '.env.test' })
/// ## APP
const express = require('express')
const app = express()
/// ## SETUP DB
const connection = require('../src/db/connection')
app.db = connection()
app.db.authenticate()
/// ## MIDDLEWARES AND ROUTES
const middleware = require('../src/server/middleware')
const routes = require('../src/routes')
middleware.config(app)
routes.config(app)
/// ## RUN in http://127.0.0.1:3000/api/v1/
app.listen(3000)
/// ##
module.exports = app
