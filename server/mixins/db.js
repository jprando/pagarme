const os = require('os')
const connection = require('../../db/connection')

module.exports = {
  register: async (app) => {
    try {
      console.log('...... Database')
      app.db = await connection()

      const { db } = app
      await db.authenticate()

      if (process.env.PG_SYNC || process.env.NODE_ENV === 'development') {
        console.log(`[ DB ] Schema ${db.options.schema}`)
        console.log(`[ DB ] Database ${db.config.database}`)
        console.log(`[ DB ] Sync started${os.EOL}`)
        if (process.env.PG_SYNC === 'force') {
          console.log(`[ DB ] Clean and Create${os.EOL}`)
        }
        await db.sync({ force: process.env.PG_SYNC === 'force' })
        console.log(`${os.EOL}[ DB ] Sync finished`)
        if (process.env.PG_SYNC) {
          await db.close()
          console.log('[ DB ] Closed')
          process.exit(0)
        }
      }
    } catch (err) {
      if (err) {
        console.error([
          '',
          '## DATABASE ERROR ##',
          err.message,
          ''
        ].join('\r\n'))
        process.exit(1)
      }
    }
  }
}
