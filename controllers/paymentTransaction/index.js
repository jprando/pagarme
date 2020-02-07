const { mapForReduce } = require('../../utils')

const action = mapForReduce(__dirname)

module.exports = [
  'getCustomerPaymentTransactions',
  'postPaymentTransaction'
].map(action.load).reduce(action.configure, {})
