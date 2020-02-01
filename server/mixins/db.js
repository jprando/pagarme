const connection = require('../../db/connection')

module.exports = {
  register: async (app) => {
    try {
      app.db = await connection()

      const { db } = app
      await db.authenticate()

      if (process.env.PG_SYNC || process.env.NODE_ENV === 'development') {
        console.log(`[ DB ] Schema ${db.options.schema}`)
        console.log(`[ DB ] Database ${db.config.database}`)
        console.log('[ DB ] Sync started')
        if (process.env.PG_SYNC === 'force') {
          console.log('[ DB ] Clean and Create')
        }
        await db.sync({ force: process.env.PG_SYNC === 'force' })
        console.log('[ DB ] Sync finished')
        if (process.env.PG_SYNC) {
          await db.close()
          console.log('[ DB ] Closed')
          process.exit(0)
        }
      }
    } catch (err) {
      if (err) {
        console.error(['', '## DATABASE ERROR ##', err.message, JSON.stringify(err), ''].join('\r\n'))
        process.exit(1)
      }
    }
  }
}
