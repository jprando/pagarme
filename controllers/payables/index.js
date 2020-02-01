const { actionForReduce } = require('../../utils')

const action = actionForReduce(__dirname)

module.exports = [
  'getCustomerPayables',
  'postPayable',
  'deletePayable'
].map(action.load).reduce(action.configure, {})
