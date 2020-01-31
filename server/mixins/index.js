const validate = require('validate.js')

module.exports = {
  config: async (app) => {
    /// for execute validations in values and objects
    app.validate = validate
    /// for access the data in database
    await require('./db').register(app)

    console.log('[ OK ] Database')
  }
}
