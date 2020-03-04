const Sequelize = require('sequelize')
const models = require('../models')
const config = require('./connection.config')
// const logging = require('./ logging')

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
    timezone: 'America/Sao_Paulo',
    // benchmark: true,
    // native: true, /// yarn install pg-native
    logging: false,
    // operatorsAliases: {
    //   $and: Sequelize.Op.and,
    //   $or: Sequelize.Op.or
    // },
    define: {
      underscored: true
    }
  })

  models.register({ db, Sequelize })

  return db
}
