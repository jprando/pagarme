const throwModuleNotFoundError = require('./throwModuleNotFoundError')

module.exports = moduleName => {
  try {
    require(moduleName)
    process.env.DEBUG && console.log(`[ OK ] check module ${moduleName}`)
  } catch {
    throwModuleNotFoundError(moduleName)
  }
}
