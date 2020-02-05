const { mapForReduce } = require('./../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'jwt',
  'user',
  'customer',
  'cashin',
  'cashout'
].map(factory.load).reduce(factory.configure, {})
