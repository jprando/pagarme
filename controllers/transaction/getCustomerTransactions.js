const { dataResponse } = require('../../utils')
const getAll = require('../getData')
const constraints = require('./getCustomerTransactions.validation')

module.exports = dataResponse(({
  validate,
  services: { transaction },
  params: { ukey, page = 0 }
}) => {
  const errors = validate({ ukey, page }, constraints)
  return !errors
    ? getAll(transaction, 'Transactions', 'search', { ukey, page })
    : { error: true, code: 400, errors }
})
