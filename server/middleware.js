const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const cors = require('cors')
const validate = require('validate.js')
const services = require('./../services')
const { sequelizeToPlain } = require('./../utils')
const { cpf, cnpj } = require('cpf-cnpj-validator');

module.exports = {
  config: app => {
    /// production best practices: Security
    app.use(helmet())

    /// access log
    app.use(morgan('[HTTP] :date[iso] :method :url HTTP/:http-version :status :res[content-length] :remote-addr - :response-time ms'))

    /// Parse incoming request bodies
    app.use(bodyParser.json())

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

    validate.validators = {
      ...validate.validators,
      cpf: value => value && !cpf.isValid(value) ? '^CPF is not a valid value' : undefined,
      cnpj: value => value && !cnpj.isValid(value) ? '^CNPJ is not a valid value' : undefined
    }

    /// Setup Services
    app.use((req, _, next) => {
      console.log('......')
      req.validate = validate
      Object.keys(services).forEach(key => {
        services[key] = {
          validate,
          services,
          db: {
            toPlain: sequelizeToPlain,
            ...app.db.models
          },
          ...services[key]
        }
      })
      req.services = services
      next()
    })

    console.log('[ OK ] Middleware')
  }
}
