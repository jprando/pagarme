var morgan = require('morgan')

module.exports = {
  config (app) {
    this.middleware(app)

    require('../routes').config(app)

    app.run = () => {
      app.port = process.env.PORT || 3000

      const welcomeMsg = `\r  [ OK ] Server running http://localhost:${app.port}`
      const sayHello = () => console.log(welcomeMsg)
      app.server = app.listen(app.port, sayHello)
      
      return app.server
    }

    console.log('  ...... Configuration')
  },
  middleware (app) {
    /// middleware gzip compression
    /// app.use(require('compression')())
    
    /// middleware access log
    app.use(morgan('  [ :date[iso] ] :method :url HTTP/:http-version :status :res[content-length] :remote-addr - :response-time ms'))
  }
}
