const { actionForReduce } = require('../../utils')

const action = actionForReduce(__dirname)

module.exports = [
  'newUser',
  'newCustomer'
].map(action.load).reduce(action.configure, {})
