const turnOff = app => {
  const { running: { server }, db } = app
  return () => {
    console.log('\r  ...... Shutting down server')
    server.close(async () => {
      await db.close()
      await console.log('  [ OK ] Database close')
      await console.log('\r  [ OK ] Server off')
      process.exit(0)
    })
    setTimeout(async () => {
      await console.error('  Forcefully server shutting down')
      process.exit(1)
    }, 10000)
  }
}

module.exports = {
  config: app => {
    // const { running: { server } } = app
    // const turnOffServer = turnOff(server)
    const turnOffServer = turnOff(app)
    process.on('SIGTERM', turnOffServer)
    process.on('SIGINT', turnOffServer)
  }
}
