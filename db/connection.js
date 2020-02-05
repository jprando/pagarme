const Sequelize = require('sequelize')
const models = require('./../models')
const config = require('./connection.config')

module.exports = () => {
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
    schema: PG_SCHEMA,
    benchmark: true,
    // native: true, /// yarn install pg-native
    logging: (msg, time, _db) => console.log(`[ DB ] ${new Date().toISOString()} ${_db.type} ${time}ms ${msg}`),
    operatorsAliases: {
      $and: Sequelize.Op.and,
      $or: Sequelize.Op.or
    }
  })

  models.register({ db, Sequelize })

  return db
}
