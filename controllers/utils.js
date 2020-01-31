const path = require('path')

const checkStatusCode = result => (result.error && 400) || (result.length && 200) || 404

const dataResponse = load => async (req, res) => {
  const result = await load(req, res)
  const statusCode = checkStatusCode(result)
  res.status(statusCode).send(result).end()
}

const loadModule = src => require(src)

const actionForReduceConfigure = basePath => ({
  load: src => {
    return value => {
      value[src] = loadModule(path.resolve(basePath, src))
      return value
    }
  },
  configure: (accumulator, configureAction) => configureAction(accumulator)
})

module.exports = {
  checkStatusCode,
  dataResponse,
  loadModule,
  actionForReduceConfigure
}
