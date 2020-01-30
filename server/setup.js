module.exports = {
  config: app => {
    [
      './middleware',
      '../routes',
      './run'
    ].map(src => require(src)).forEach(set => set.config(app))

    console.log('  ...... Configuration')
  }
}
