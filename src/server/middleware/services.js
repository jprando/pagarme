const validate = require('./validate')
const services = require('../../services')
const { sequelizeToPlain } = require('../../utils')
const { log } = require('./../../utils')

module.exports = function (app) {
  // const transaction = (...params) => app.db.transaction.bind(app.db, params)
  return function (req, res, next) {
    log('......')
    Object.keys(services).forEach(function (key) {
      services[key] = {
        // app,
        validate,
        services,
        db: {
          transaction: app.db.transaction.bind(app.db),
          toPlain: sequelizeToPlain,
          ...app.db.models
        },
        ...services[key]
      }
    })
    req.services = services
    req.validate = validate
    next()
  }
}
