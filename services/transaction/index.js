const { mapForReduce } = require('./../../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'search'
].map(factory.load).reduce(factory.configure, {})
