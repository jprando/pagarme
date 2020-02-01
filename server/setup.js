const { loadModule } = require('../utils')

module.exports = {
  config: async app => {
    const _config = async _module => { await _module.config(app) };
    [
      './mixins',
      './middleware',
      '../routes',
      './run'
    ].map(src => require('path').resolve(__dirname, src)).map(loadModule)
      .forEach(await _config)

    /* /// behind proxies
    app.set('trust proxy', function (ip) {
      if (ip === '127.0.0.1') return true // trusted IPs
      /// if (ip === '127.0.0.1' || ip === '123.123.123.123') return true // trusted IPs
      else return false
    })
    */

    await console.log('[ OK ] Configuration')
  }
}
