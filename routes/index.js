const helmet = require('helmet')

module.exports = {
    config(app) {
        // this.middleware(app)
        app.use(helmet()) /// Production Best Practices: Security
        app.get('/', (req, res) => res.send('Oi'))
    },
    middleware(app) {
        app.use((req, res, next) => {
            res.status(404).send('Oi, tudo bem? parece que voce esta perdido!')
        })
    }
}
