module.exports = {
  config (router) {
    require('./user').config(router)

    router.get('/', (req, res) => {
      res.status(200).send('Oi! Tudo Bem?').end()
    })
  }
}
