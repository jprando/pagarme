const port = process.env.PORT || 3000

module.exports = {
  config (app) {
    /// app.use(require('compression')())
    require('../routes').config(app)

    app.run = () => {
      return app.listen(port, () => console.log(`\r  [ OK ] Server running http://localhost:${port}`))
    }

    console.log('  ...... Configuration')
  }
}
