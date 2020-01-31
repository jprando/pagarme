const throwModuleNotFoundError = require('./throwModuleNotFoundError')

module.exports = moduleName => {
  try {
    require(moduleName)
  } catch {
    throwModuleNotFoundError(moduleName)
  }
}
