require('dotenv').config()
const preflight = require('./preflight')
const express = require('express')
const setup = require('./setup')

module.exports = {
  run: async () => {
    preflight()

    /// do not show stack trace with in production environment
    Error.stackTraceLimit = process.env.NODE_ENV === 'production' ? 0 : 10

    const app = express()
    await setup.config(app)
    return app.run()
  }
}
