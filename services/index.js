const { mapForReduce } = require('./../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'jwt',
  'user',
  'cashin',
  'cashout'
].map(factory.load).reduce(factory.configure, {})
