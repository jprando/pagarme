const { mapForReduce } = require('../../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'postLogin'
].map(factory.load).reduce(factory.configure, {})
