const { mapForReduce } = require('./../../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'byId',
  'all',
  'create',
  'update',
  'delete',
  'login',
  'password',
  'removeCredential'
].map(factory.load).reduce(factory.configure, {})
