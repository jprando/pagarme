const { mapForReduce } = require('../../utils')

const action = mapForReduce(__dirname)

module.exports = [
  'getCustomerPayables',
  'postPayable',
  'deletePayable'
].map(action.load).reduce(action.configure, {})
