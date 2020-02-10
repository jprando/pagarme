const { mapForReduce } = require('../../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'getAll',
  'search',
  'createByPaymentTransaction'
].map(factory.load).reduce(factory.configure, {})
