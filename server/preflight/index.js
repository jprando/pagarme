const os = require('os')
const nodeEnvUndefined = require('./nodeEnvUndefined')
const nodeEnvOutRrange = require('./nodeEnvOutRrange')
const check = require('./check')

module.exports = () => {
  process.env.NODE_ENV || nodeEnvUndefined()
  const mode = (process.env.NODE_ENV).toLocaleUpperCase()
  console.log(`${os.EOL}[INFO] Mode ${mode}`)

  Object.keys(require('./../../package.json').dependencies)
    .forEach(module => check(module))

  const constraints = {
    production: () => {
      check('pm2')
      if (process.env.NODE_APP_INSTANCE === undefined) {
        process.exit(0)
      }
    },
    development: () => check('nodemodule')
  }

  constraints[process.env.NODE_ENV] || nodeEnvOutRrange()
  constraints[process.env.NODE_ENV]()

  console.log('[ OK ] Preflight')
}
