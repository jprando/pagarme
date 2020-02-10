const dataResponse = require('../dataResponse')
const getAll = require('../getData')
const constraints = require('./getCustomerPaymentTransactions.validation')

module.exports = dataResponse(({
  validate,
  services: { paymentTransaction },
  params: { ukey, page = 0 }
}) => {
  const errors = validate({ ukey, page }, constraints)
  if (errors) {
    return { error: true, code: 422, errors }
  }

  try {
    return getAll(paymentTransaction, 'Transactions', 'search', { ukey, page })
  } catch (err) {
    return { error: true, code: 422, message: err.message }
  }
})
