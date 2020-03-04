const express = require('express')

module.exports = {
  config (app) {
    const router = new express.Router()

    require('./admin').config(router)
    require('./user').config(router)
    require('./transaction').config(router)
    require('./payable').config(router)
    require('./customer').config(router)

    router.get('/', (req, res) => {
      res.status(200).send('Oi! Tudo Bem?').end()
    })

    app.use('/api/v1', router)
    if (process.env.NODE_ENV !== 'test') {
      console.log('[ OK ] Routes')
    }
  }
}
