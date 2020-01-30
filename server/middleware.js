const helmet = require('helmet')
const morgan = require('morgan')

module.exports = {
  config: app => {
    /// production best practices: Security
    app.use(helmet())

    /// gzip compression
    /// app.use(require('compression')())

    /// access log
    app.use(morgan('  [ :date[iso] ] :method :url HTTP/:http-version :status :res[content-length] :remote-addr - :response-time ms'))

    console.log('  ...... Middleware')
  }
}
