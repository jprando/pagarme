const express = require('express')
const { log } = require('../utils')

module.exports = {
  config (app) {
    const adminRouter = new express.Router()
    const privateRouter = new express.Router()
    const publicRouter = new express.Router()

    require('./admin').config(adminRouter)
    require('./private').config(privateRouter)
    require('./public').config(publicRouter);

    [adminRouter, privateRouter, publicRouter]
      .forEach(route => app.use('/api/v1', route))

    log('[ OK ] Routes')
  }
}
