const { mapForReduce } = require('../../utils')

const action = mapForReduce(__dirname)

module.exports = [
  'getCustomerPaymentTransaction',
  'postPaymentTransaction'
].map(action.load).reduce(action.configure, {})
