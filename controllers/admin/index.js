const { mapForReduce } = require('../../utils')

const action = mapForReduce(__dirname)

module.exports = [
  'getUserById',
  'getAllUsers',
  'newUser',
  'updateUser',
  'deleteUser',

  'getCustomerById',
  'getAllCustomers',
  'newCustomer',
  'updateCustomer',
  'deleteCustomer'
].map(action.load).reduce(action.configure, {})
