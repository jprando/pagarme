const dbSeed = require('./seed')
const inDevelopmentMode = process.env.NODE_ENV === 'development'
const pgSyncValue = process.env.PG_SYNC && process.env.PG_SYNC.toUpperCase()

module.exports = async db => {
  const force = pgSyncValue === 'FORCE'

  if (pgSyncValue !== 'NO' || inDevelopmentMode) {
    console.log(`[ DB ] ${db.config.database}.${db.options.schema}`)
    console.log('[ DB ] Sync')
    if (force) {
      console.log('[ DB ] Clean and Create')
    }

    await db.sync({ force })

    if (pgSyncValue) {
      await db.close()
      console.log('[ DB ] Closed')
      process.exit(0)
    }
  }

  await dbSeed(db)
}
