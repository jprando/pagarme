const turnOff = server => () => {
  console.log('\r  ...... Shutting down server')
  server.close(() => {
    console.log('\r  [ OK ] Server off')
    process.exit(0)
  })
  setTimeout(() => {
    console.error('  Forcefully server shutting down')
    process.exit(1)
  }, 10000)
}

module.exports = {
  config: app => {
    const { running: { server } } = app
    const turnOffServer = turnOff(server)
    process.on('SIGTERM', turnOffServer)
    process.on('SIGINT', turnOffServer)
  }
}
