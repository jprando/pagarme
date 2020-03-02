const mapForReduce = require('./mapForReduce')

const factory = mapForReduce(__dirname)

const _utils = [
  'loadModule',
  'asyncForEach',
  'sequelizeToPlain',
  'informBoth',
  'dontInformBoth',
  'extractLastFour'
].map(factory.load).reduce(factory.configure, {})

module.exports = {
  mapForReduce,
  ..._utils
}
