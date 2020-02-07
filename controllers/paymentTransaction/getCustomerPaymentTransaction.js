const { dataResponse } = require('../../utils')
const getAll = require('../getData')
const constraints = require('./getCustomerPaymentTransaction.validation')

module.exports = dataResponse(({
  validate,
  services: { paymentTransaction },
  params: { ukey, page = 0 }
}) => {
  const errors = validate({ ukey, page }, constraints)
  return !errors
    ? getAll(paymentTransaction, 'Transactions', 'search', { ukey, page })
    : { error: true, code: 400, errors }
})
