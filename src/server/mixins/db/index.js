const connection = require('../../../db/connection')
const dbSync = require('./sync')

module.exports = {
  register: async (app) => {
    try {
      app.db = connection()
      await app.db.authenticate()
      await dbSync(app.db)
    } catch (err) {
      if (err) {
        console.error('## DATABASE REGISTER ERROR ##')
        console.error(err.message)
        process.exit(1)
      }
    }
  }
}
