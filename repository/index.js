const { mapForReduce } = require('./../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  ''
].map(factory.load).reduce(factory.configure, {})
