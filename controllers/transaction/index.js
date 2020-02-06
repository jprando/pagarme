const { mapForReduce } = require('../../utils')

const action = mapForReduce(__dirname)

module.exports = [
  'getAllTransactions',
  'getCustomerTransactions',
  'postTransaction'
].map(action.load).reduce(action.configure, {})
