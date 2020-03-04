require('dotenv').config()
const preflight = require('./preflight')
const express = require('express')
const setup = require('./setup')

module.exports = {
  run: async () => {
    process.env.IN_PRODUCTION_MODE = process.env.NODE_ENV === 'production'
    process.env.IN_DEVELOPMENT_MODE = process.env.NODE_ENV === 'development'
    process.env.IN_TEST_MODE = process.env.NODE_ENV === 'test'

    process.env.NOTIN_PRODUCTION_MODE = !process.env.IN_PRODUCTION_MODE
    process.env.NOTIN_DEVELOPMENT_MODE = !process.env.IN_DEVELOPMENT_MODE
    process.env.NOTIN_TEST_MODE = !process.env.IN_TEST_MODE

    preflight()

    /// do not show stack trace with in production environment
    Error.stackTraceLimit = process.env.IN_PRODUCTION_MODE ? 0 : 10

    const app = express()
    await setup.config(app)
    return app.run()
  }
}
