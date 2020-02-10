const { mapForReduce } = require('../../utils')

const action = mapForReduce(__dirname)

module.exports = [
  'postPaymentTransaction',
  'getCustomerPaymentTransactions',
  'getCustomerPaymentTransactionsBalance'
].map(action.load).reduce(action.configure, {})
