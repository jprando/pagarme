module.exports = {
  config: async app => {
    const load = src => require(src)
    const setConfig = async set => { await set.config(app) };
    [
      './mixins',
      './middleware',
      '../routes',
      './run'
    ].map(load).forEach(setConfig)

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
