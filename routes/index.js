const express = require('express')
const { loadModule } = require('./../utils')

module.exports = {
  config (app) {
    const router = new express.Router()
    const routeConfig = route => route.config(router);
    [
      'admin',
      'user',
      'transaction',
      'payable'
    ].map(loadModule.base(__dirname)).forEach(routeConfig)

    router.get('/', (req, res) => {
      res.status(200).send('Oi! Tudo Bem?').end()
    })

    app.use('/api/v1', router)

    console.log('[ OK ] Routes')
  }
}
