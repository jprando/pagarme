const { mapForReduce } = require('../../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'getById',
  'getAll',
  'create',
  'update',
  'delete',
  'balance'
].map(factory.load).reduce(factory.configure, {})
