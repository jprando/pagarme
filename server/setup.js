module.exports = {
  config: async app => {
    const runConfig = async _module => { await _module.config(app) };
    [
      './mixins',
      './middleware',
      '../routes',
      './run'
    ]
      // .map(loadModule.base(__dirname))
      .map(src => require(src))
      .forEach(await runConfig)

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
