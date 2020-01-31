const validate = require('validate.js')
const pgp = require('pg-promise')()
const connection = require('./../db/connection')

module.exports = {
  config (app) {
    /// for execute validations in values and objects
    app.validate = validate
    /// for access the data in database
    app.db = pgp(connection())
  }
}
