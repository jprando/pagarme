const mapForReduce = require('./mapForReduce')

const factory = mapForReduce(__dirname)

const _utils = [
  'checkStatusCode',
  'loadModule',
  'dataResponse',
  'asyncForEach',
  'sequelizeToPlain',
  'validarCPF',
  'validarCNPJ'
].map(factory.load).reduce(factory.configure, {})

module.exports = {
  mapForReduce,
  ..._utils
}
