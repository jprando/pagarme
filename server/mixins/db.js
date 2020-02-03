const { EOL } = require('os')
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
        console.log(`[ DB ] Sync started${EOL}`)
        if (process.env.PG_SYNC === 'force') {
          console.log(`[ DB ] Clean and Create${EOL}`)
        }
        await db.sync({ force: process.env.PG_SYNC === 'force' })
        console.log(`${EOL}[ DB ] Sync finished`)
        if (process.env.PG_SYNC) {
          await db.close()
          console.log('[ DB ] Closed')
          process.exit(0)
        }
      }

      if (process.env.NODE_ENV === 'development') {
        db.models.user.findOrCreate({
          where: { email: 'jeudi@prando.dev' },
          defaults: {
            name: 'Jeudi Prando',
            email: 'jeudi@prando.dev',
            ukey: '2f710682-aee9-4237-ad71-f7f471be91ad',
            credential: '1123qqwe'
          }
        })
      }
    } catch (err) {
      if (err) {
        console.error([
          '',
          '## DATABASE ERROR ##',
          err.message,
          ''
        ].join(EOL))
        process.exit(1)
      }
    }
  }
}
