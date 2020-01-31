require('dotenv').config()

const preflight = require('./preflight')
const express = require('express')
const setup = require('./setup')

module.exports = {
  config () {
    /// do not show stack trace with in production environment
    Error.stackTraceLimit = process.env.NODE_ENV === 'production' ? 0 : 10
    const mode = ('' + process.env.NODE_ENV).toLocaleUpperCase()
    console.log(`  ...... Mode ${mode}`)
  },
  run () {
    preflight()
    this.config()
    const app = express()
    setup.config(app)
    app.run()
  }
}
