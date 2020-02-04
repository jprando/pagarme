const { mapForReduce } = require('./../../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'password',
  'login',
  'create',
  'findAll'
].map(factory.load).reduce(factory.configure, {})
