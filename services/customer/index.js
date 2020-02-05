const { mapForReduce } = require('./../../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'getById',
  'getAll',
  'create',
  // 'update',
  // 'delete'
].map(factory.load).reduce(factory.configure, {})
