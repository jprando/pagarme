const express = require('express')

module.exports = {
  config (app) {
    const router = new express.Router()

    const routesConfig = [
      './transaction',
      './payable'
    ].map(src => require(src))

    routesConfig.forEach(route => route.config(router))

    router.get('/', (req, res) => {
      res.status(200).send('Oi! Tudo Bem?').end()
    })

    app.use('/api/v1', router)

    console.log('  ...... Routes')
  }
}
