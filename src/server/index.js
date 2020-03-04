require('dotenv').config()
const express = require('express')
const init = require('./init')
const preflight = require('./preflight')
const setup = require('./setup')

module.exports = {
  run: async () => {
    init()
    preflight()
    const app = express()
    await setup.config(app)
    return app.run()
  }
}
