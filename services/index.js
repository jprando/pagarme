const { mapForReduce } = require('../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'jwt',
  'user',
  'customer',
  'paymentTransaction',
  'payable'
].map(factory.load).reduce(factory.configure, {})
