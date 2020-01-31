const Sequelize = require('sequelize')
const models = require('./models')
const config = require('./connection.config')

module.exports = async () => {
  const {
    PG_HOST,
    PG_PORT,
    PG_USER,
    PG_PASS,
    PG_SCHEMA,
    PG_DATABASE
  } = config

  const db = new Sequelize(PG_DATABASE, PG_USER, PG_PASS, {
    dialect: 'postgres',
    host: PG_HOST,
    port: PG_PORT,
    schema: PG_SCHEMA
  })

  await models.register({ db, Sequelize })

  return db
}
