const _package = require('../../../package')
const check = require('./check')
const nodeEnvOutRange = require('./nodeEnvOutRange')
const nodeEnvUndefined = require('./nodeEnvUndefined')
const { log } = require('./../../utils')

module.exports = () => {
  if (!process.env.NODE_ENV) {
    nodeEnvUndefined()
  }

  const mode = (process.env.NODE_ENV).toLocaleUpperCase()
  log(`[INFO] Mode ${mode}`)

  Object.keys(_package.dependencies).forEach(module => check(module))

  const constraints = {
    production: () => {
      /// NODE_APP_INSTANCE is defined with initialized by pm2
      if (process.env.NODE_APP_INSTANCE === undefined) {
        process.exit(0)
      }
    },
    development: () => check('nodemodule'),
    test: () => { }
  }

  const nodeCheckEnvMode = constraints[process.env.NODE_ENV] || nodeEnvOutRange
  nodeCheckEnvMode()

  log('[ OK ] Preflight')
}
