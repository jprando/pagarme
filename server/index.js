const express = require('express')

function turnOff (server) {
  return () => {
    console.log('\r  ...... Shutting down server')
    server.close(() => {
      console.log('\r  [ OK ] Server off')
      process.exit(0)
    })
  }
}

module.exports = {
  run () {
    const app = express()
    require('./setup').config(app)
    const server = app.run()
    const turnOffServer = turnOff(server)
    process.on('SIGTERM', turnOffServer)
    process.on('SIGINT', turnOffServer)
  }
}
