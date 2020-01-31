require('dotenv').config()

const express = require('express')
const setup = require('./setup')

module.exports = {
  config () {
    Error.stackTraceLimit = process.env.NODE_ENV === 'production' ? 0 : 10
  },
  run () {
    this.config()
    const app = express()
    setup.config(app)
    app.run()
  }
}
