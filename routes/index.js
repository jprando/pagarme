const helmet = require('helmet')

module.exports = {
  config (app) {
    app.use(helmet()) /// Production Best Practices: Security
    app.get('/', (req, res) => {
      res.status(200).send('Oi! #teste').end()
    })
  }
}
