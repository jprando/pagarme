const dbSeed = require('./seed')
const { log } = require('./../../../utils')

module.exports = async db => {
  const inDevelopmentMode = process.env.NODE_ENV === 'development'
  const pgSyncValue = process.env.PG_SYNC && process.env.PG_SYNC.toUpperCase()
  const force = pgSyncValue === 'FORCE'
  const noSync = pgSyncValue === 'NO'

  if (!noSync || inDevelopmentMode) {
    log(`[ DB ] ${db.config.database}.${db.options.schema}`)
    log('[ DB ] Sync')
    if (force) {
      log('[ DB ] Clean and Create')
    }

    await db.sync({ force })

    if (pgSyncValue) {
      await db.close()
      log('[ DB ] Closed')
      process.exit(0)
    }
  }

  await dbSeed(db)
}
