const { mapForReduce } = require('./../../utils')

const factory = mapForReduce(__dirname)

module.exports = [
  'getById',
  'getAll',
  'create',
  'update',
  'delete',
  'deleteAll',
  'login',
  'password',
  'removeCredential',
  'generateCredentialText'
].map(factory.load).reduce(factory.configure, {})
