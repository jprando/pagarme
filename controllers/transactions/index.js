const { actionForReduceConfigure } = require('./../utils')

const action = actionForReduceConfigure(__dirname)

module.exports = [
  'getCustomerTransactionsById',
  'postTransaction',
  'deleteTransactionById'
].map(action.load).reduce(action.configure, {})
