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
  'removeCredential',
  'generateCredentialText'
].map(factory.load).reduce(factory.configure, {})
