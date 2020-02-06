const { EOL } = require('os')
const connection = require('../../db/connection')
const inDevelopmentMode = process.env.NODE_ENV === 'development'
const pgSyncValue = process.env.PG_SYNC && process.env.PG_SYNC.toUpperCase()

module.exports = {
  register: async (app) => {
    try {
      console.log('...... Database')
      app.db = connection()
      await app.db.authenticate()
      const { db } = app
      if (pgSyncValue !== 'NO' || (pgSyncValue !== 'NO' && inDevelopmentMode)) {
        console.log(`[ DB ] Schema ${db.options.schema}`)
        console.log(`[ DB ] Database ${db.config.database}`)
        console.log(`[ DB ] Sync started${EOL}`)
        if (pgSyncValue === 'FORCE') {
          console.log(`[ DB ] Clean and Create${EOL}`)
        }
        await db.sync({ force: pgSyncValue === 'FORCE' })
        console.log(`${EOL}[ DB ] Sync finished`)
        if (pgSyncValue) {
          await db.close()
          console.log('[ DB ] Closed')
          process.exit(0)
        }
      }

      if (process.env.NODE_ENV === 'development') {
        db.models.user.scope('allUsers').findOrCreate({
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
