const path = require('path')

const loadModule = (src) => require(path.resolve(this._base, src))
loadModule.base = basePath => src => loadModule(path.resolve(basePath, src))

const checkStatusCode = result =>
  (result && result.error && (result.code || 400)) ||
  (result && !result.error && (result.length || Object.keys(result).length) && 200) || 404
  /// vai dar ruim no verb DELETE

const dataResponse = load => async (req, res) => {
  try {
    const result = await load(req, res)
    const statusCode = checkStatusCode(result)
    if (statusCode === 200) {
      delete result.code
      res.status(statusCode).json(result).end()
    } else {
      if (process.env.NODE_ENV === 'production' && result.error) {
        res.status(statusCode).end()
      } else {
        const reponse = {
          error: true,
          message: result.message,
          errors: result.errors
        }
        res.status(statusCode).json(reponse).end()
      }
    }
  } catch (err) {
    if (process.env.NODE_ENV === 'production') {
      res.status(500).end()
    } else {
      res.status(500).json(err.message || err).end()
    }
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
