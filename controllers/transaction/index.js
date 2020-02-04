const { mapForReduce } = require('../../utils')

const action = mapForReduce(__dirname)

module.exports = [
  'getCustomerTransactions',
  'postTransaction',
  'deleteTransaction'
].map(action.load).reduce(action.configure, {})
