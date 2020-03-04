const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser')
const services = require('./services')
const { log } = require('../../utils')

module.exports = {
  config: app => {
    if (process.env.NODE_ENV !== 'test') {
      /// production best practices: Security
      app.use(helmet())
      /// access log
      app.use(morgan('[HTTP] :date[iso] :method :url HTTP/:http-version :status :res[content-length] :remote-addr - :response-time ms'))
      /// enable suporte to compression: deflate, gzip
      app.use(compression())
    }

    /// Parse incoming request body
    app.use(bodyParser.json())

    /// Setup Services
    app.use(services(app))

    log('[ OK ] Middleware')
  }
}
