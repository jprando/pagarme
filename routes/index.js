const express = require('express')
const { loadModule } = require('../utils')

module.exports = {
  config (app) {
    const router = new express.Router()
    const routeConfig = route => route.config(router);
    [
      'admin',
      'user',
      'transaction',
      'payable',
      'customer'
    ].map(loadModule.base(__dirname)).forEach(routeConfig)

    router.get('/', (req, res) => {
      res.status(200).send('Oi! Tudo Bem?').end()
    })

    app.use('/api/v1', router)
    if (process.env.NODE_ENV !== 'test') {
      console.log('[ OK ] Routes')
    }
  }
}
