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

    /* /// behind proxies
    app.set('trust proxy', function (ip) {
      if (ip === '127.0.0.1') return true // trusted IPs
      /// if (ip === '127.0.0.1' || ip === '123.123.123.123') return true // trusted IPs
      else return false
    })
    */

    log('[ OK ] Configuration')

    return app
  }
}
