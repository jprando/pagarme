const express = require('express')
const setup = require('./setup')

module.exports = {
  run () {
    const app = express()
    setup.config(app)
    app.run()
  }
}
