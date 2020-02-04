const { mapForReduce } = require('./../../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'password',
  'login',
  'create',
  'all',
  'byId',
  'update',
  'removeCredential'
].map(factory.load).reduce(factory.configure, {})
