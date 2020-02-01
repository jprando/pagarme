const turnOff = app => {
  return () => {
    const { running: { server }, db } = app
    console.log('\r...... Shutting down server')
    server.close(async () => {
      await db && db.close()
      console.log('[ OK ] Database close')
      console.log('\r[ OK ] Server off')
      process.exit(0)
    })
    setTimeout(async () => {
      console.error('Forcefully server shutting down')
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
