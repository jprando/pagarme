const turnOff = require('./turnOff')

module.exports = {
  config: app => {
    app.run = () => {
      const port = process.env.PORT || 3000
      const welcomeMsg = `\r[ OK ] Server running http://localhost:${port}/api/v1/`
      const sayHello = () => process.env.NODE_ENV !== 'test' && console.log(welcomeMsg)
      const server = app.listen(port, sayHello)
      app.running = { server }
      turnOff.config(app)
    }
  }
}
