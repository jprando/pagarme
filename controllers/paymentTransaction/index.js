const { mapForReduce } = require('../../utils')

const action = mapForReduce(__dirname)

module.exports = [
  'postPaymentTransaction',
  'getCustomerPaymentTransactions'
].map(action.load).reduce(action.configure, {})
