const { mapForReduce } = require('../../utils')

const action = mapForReduce(__dirname)

module.exports = [
  'getUserById',
  'getAllUsers',
  'newUser',
  'updateUser',
  'deleteUser',

  'newCustomer'
].map(action.load).reduce(action.configure, {})
