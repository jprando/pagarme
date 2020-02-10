const { mapForReduce } = require('../../utils')

const action = mapForReduce(__dirname)

module.exports = [
  'getCustomerPayables',
  'getCustomerPayablesBalance'
].map(action.load).reduce(action.configure, {})
