const connection = require('../../db/connection')

module.exports = {
  register: async ({ db }) => {
    try {
      db = await connection()
      await db.authenticate()

      if (process.env.PG_SYNC || process.env.NODE_ENV === 'development') {
        await console.log(`[ DB ] Schema ${db.options.schema}`)
        await console.log(`[ DB ] Database ${db.config.database}`)
        await console.log('[ DB ] Sync started')
        if (process.env.PG_SYNC === 'force') {
          await console.log('[ DB ] Clean and Create')
        }
        await db.sync({ force: process.env.PG_SYNC === 'force' })
        await console.log('[ DB ] Sync finished')
        if (process.env.PG_SYNC) {
          await db.close()
          await console.log('[ DB ] Closed')
          await process.exit(0)
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
