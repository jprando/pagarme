const { mapForReduce } = require('../../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'getAll',
  'search',
  'create'
].map(factory.load).reduce(factory.configure, {})
