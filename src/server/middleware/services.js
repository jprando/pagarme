const validate = require('./validate')
const services = require('../../services')
const { sequelizeToPlain } = require('../../utils')

module.exports = function (app) {
  return function (req, res, next) {
    Object.keys(services).forEach(function (key) {
      services[key] = {
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
