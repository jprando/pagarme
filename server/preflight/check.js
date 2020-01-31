const throwModuleNotFoundError = require('./throwModuleNotFoundError')

module.exports = moduleName => {
  try {
    require(moduleName)
    /// console.log(`  [ OK ] module ${moduleName}`)
  } catch {
    throwModuleNotFoundError(moduleName)
  }
}
