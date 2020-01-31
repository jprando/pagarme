const validate = require('validate.js')
const connection = require('./../db/connection')

module.exports = {
  config (app) {
    /// for execute validations in values and objects
    app.validate = validate

    /// for access the data in database
    app.db = connection()
    app.db.authenticate()
      .then(() => console.log('  [ OK ] Database'))
      .catch(err => {
        if (err) {
          console.error(['', '## DATABASE ERROR ##', err.message, JSON.stringify(err), ''].join('\r\n  '))
          process.exit(1)
        }
      })

    console.log('  ...... Database')
  }
}
