const { mapForReduce } = require('../../utils')

const action = mapForReduce(__dirname)

module.exports = [
  'getAllUsers',
  'newUser',
  'newCustomer'
].map(action.load).reduce(action.configure, {})
