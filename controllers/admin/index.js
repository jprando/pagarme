const { mapForReduce } = require('../../utils')

const action = mapForReduce(__dirname)

module.exports = [
  'getAllUsers',
  'getUserById',
  'newUser',
  'newCustomer',
  'updateUser'
].map(action.load).reduce(action.configure, {})
