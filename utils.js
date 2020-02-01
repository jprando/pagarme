const path = require('path')

const loadModule = (src) => require(path.resolve(this._base, src))
loadModule.base = prefix => {
  this._base = prefix
  return loadModule
}

const checkStatusCode = result =>
  (result && result.error && 400) ||
  (result && result.length && 200) || 404
  /// vai dar ruim no verb DELETE

const dataResponse = load => async (req, res) => {
  const result = await load(req, res)
  const statusCode = checkStatusCode(result)
  if (statusCode === 200) {
    res.status(statusCode).send(result).end()
  } else {
    res.status(statusCode).end()
  }
}

const actionForReduce = basePath => ({
  load: src => {
    return value => ({ ...value, [src]: loadModule(path.resolve(basePath, src)) })
  },
  configure: (accumulator, configureAction) => configureAction(accumulator)
})

module.exports = {
  checkStatusCode,
  dataResponse,
  loadModule,
  actionForReduce
}
