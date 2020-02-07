const db = require('./db')
/// const validate = require('validate.js')

module.exports = {
  config: async (app) => {
    /// for execute validations in values and objects
    /// app.validate = validate
    /// for access the data in database
    await db.register(app)
    if (process.env.NODE_ENV !== 'test') {
      console.log('[ OK ] Database')
    }
  }
}
