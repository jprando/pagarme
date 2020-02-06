const { mapForReduce } = require('../../utils')

const action = mapForReduce(__dirname)

module.exports = [
  'getCustomerTransactions',
  'postTransaction'
].map(action.load).reduce(action.configure, {})
