module.exports = {
  config (app) {
    [
      './transaction',
      './payable'
    ].map(src => require(src)).forEach(route => route.config(app))

    app.get('/', (req, res) => {
      res.status(200).send('Oi! Tudo Bem?').end()
    })

    console.log('  ...... Routes')
  }
}
