const { actionForReduce } = require('./../utils')

const action = actionForReduce(__dirname)

module.exports = [
  'getCustomerTransactions',
  'postTransaction',
  'deleteTransaction'
].map(action.load).reduce(action.configure, {})
