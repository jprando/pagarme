const { log } = require('./../utils')

module.exports = {
  config: async app => {
    const runConfig = async _module => _module.config(app)

    const _modules = [
      require('./mixins'),
      require('./middleware'),
      require('../routes'),
      require('./run')
    ]

    /// array.forEach is not async call
    for (let index = 0; index < _modules.length; index++) {
      await runConfig(_modules[index])
    }

    log('[ OK ] Configuration')

    return app
  }
}
