require('dotenv').config()
Error.stackTraceLimit = process.env.NODE_ENV === 'production' ? 0 : 10

const express = require('express')
const preflight = require('./preflight')
const setup = require('./setup')

module.exports = {
  run: async () => {
    preflight()
    const app = express()
    await setup.config(app)
    return app.run()
  }
}
