const express = require('express')

module.exports = {
  config (app) {
    const router = new express.Router()
    // const load = src => require(src)
    const execConfig = route => route.config(router);
    [
      './admin',
      './user',
      './transaction',
      './payable'
    // ].map(loadModule.base(__dirname)).forEach(execConfig)
    ].map(src => require(src)).forEach(execConfig)

    router.get('/', (req, res) => {
      res.status(200).send('Oi! Tudo Bem?').end()
    })

    app.use('/api/v1', router)

    console.log('[ OK ] Routes')
  }
}
