const { mapForReduce } = require('./../../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'getAll',
  'search'
].map(factory.load).reduce(factory.configure, {})
