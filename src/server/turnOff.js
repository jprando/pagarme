const { EOL } = require('os')

const turnOff = app => {
  return () => {
    const { running: { server }, db } = app
    console.log('...... Shutting down server')
    server && server.close(async () => {
      db && await db.close()
      console.log([
        '[ OK ] Database close',
        '[ OK ] Server off',
        ''
      ].join(EOL))
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
    const turnOffServer = turnOff(app)
    process.on('SIGTERM', turnOffServer)
    process.on('SIGINT', turnOffServer)
  }
}
