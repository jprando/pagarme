const app = require('express')()

app.use(require('compression')())
require('./routes').config(app)

const port = process.env.PORT || 3000

const server = app.listen(port, () => console.log(`\rRunning: http://localhost:${port}`))

process.on('SIGTERM', shutDown)
process.on('SIGINT', shutDown)

function shutDown() {
    console.log('\rShutting down...')
    server.close(() => {
        process.exit(0)
    })
}