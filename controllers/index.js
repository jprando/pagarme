const { mapForReduce } = require('../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'admin',
  'user',
  'transaction',
  'payable'
].map(factory.load).reduce(factory.configure, {})
