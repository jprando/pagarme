module.exports = {
  config: app => {
    [
      './mixins',
      './middleware',
      '../routes',
      './run'
    ].map(src => require(src)).forEach(set => set.config(app))

    /* /// behind proxies
    app.set('trust proxy', function (ip) {
      if (ip === '127.0.0.1') return true // trusted IPs
      /// if (ip === '127.0.0.1' || ip === '123.123.123.123') return true // trusted IPs
      else return false
    })
    */

    console.log('  ...... Configuration')
  }
}
