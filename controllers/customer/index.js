const { mapForReduce } = require('../../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'getCustomerBalance'
].map(factory.load).reduce(factory.configure, {})
