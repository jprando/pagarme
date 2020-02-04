const path = require('path')

const loadModule = (src) => require(src)
loadModule.base = basePath => src => loadModule(path.resolve(basePath, src))

module.exports = loadModule
