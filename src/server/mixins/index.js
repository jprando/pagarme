const db = require('./db')
const { log } = require('../../utils')

module.exports = {
  config: async (app) => {
    log('...... Database')
    await db.register(app)
      .then(() => { log('[ OK ] Database') })
      .catch((err) => {
        console.error('## DATABASE REGISTER ERROR ##')
        console.error(err.message)
        process.exit(1)
      })
  }
}
