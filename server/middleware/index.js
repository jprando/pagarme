const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const cors = require('cors')
const services = require('./services')

module.exports = {
  config: app => {
    if (process.env.NODE_ENV !== 'test') {
      /// production best practices: Security
      app.use(helmet())
      /// access log
      app.use(morgan('[HTTP] :date[iso] :method :url HTTP/:http-version :status :res[content-length] :remote-addr - :response-time ms'))
    }

    /// Parse incoming request body
    app.use(bodyParser.json())

    /// Setup Services
    app.use(services(app))

    console.log('[ OK ] Middleware')
  }
}

/* /// help protect against unauthorized access
    const corsDefaultConfigReference = {
      'origin': '*',
      'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'preflightContinue': false,
      'optionsSuccessStatus': 204
    }
    app.use(cors()) /// all origins enabled
    ///
    var corsOptions = {
      origin: 'http://example.com',
      methods: ['GET', 'POST', 'PUT', 'HEAD', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      exposedHeaders: ['Content-Range', 'X-Content-Range'],
      credentials: true, Access-Control-Allow-Credentials CORS header
      optionsSuccessStatus: 200 /// default 204
    }
    app.use(cors(corsOptions)) /// allow only if origin for http://example.com
*/
