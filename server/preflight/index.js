const { EOL } = require('os')
const _package = require('../../package')
const nodeEnvUndefined = require('./nodeEnvUndefined')
const nodeEnvOutRange = require('./nodeEnvOutRange')
const check = require('./check')

module.exports = () => {
  if (!process.env.NODE_ENV) {
    nodeEnvUndefined()
  }

  const mode = (process.env.NODE_ENV).toLocaleUpperCase()
  if (process.env.NODE_ENV !== 'test') {
    console.log(`${EOL}[INFO] Mode ${mode}`)
  }

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

  if (process.env.NODE_ENV !== 'test') {
    console.log('[ OK ] Preflight')
  }
}
