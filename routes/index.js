const helmet = require('helmet')

module.exports = {
  config (app) {
    app.use(helmet()) /// Production Best Practices: Security
    app.get('/', (req, res) => {
      console.log('GET /')
      res.send('Oi')
    })
  }
}
