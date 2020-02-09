const { dataResponse } = require('../../utils')
const newPaymentTransactionConstraints = require('./postPaymentTransaction.validation')

module.exports = dataResponse(async ({
  validate,
  services: { paymentTransaction },
  body
}) => {
  const newPaymentTransaction = validate.cleanAttributes(body, newPaymentTransactionConstraints)

  delete body.month
  delete body.year

  const errors = validate(newPaymentTransaction, newPaymentTransactionConstraints)
  if (errors) {
    return { error: true, code: 422, errors }
  }
  try {
    const result = await paymentTransaction.create(newPaymentTransaction)
    result.amount = Number.parseFloat(result.amount)
    delete result.year
    delete result.month
    delete result.updatedAt
    delete result.deletedAt
    return { error: false, code: 201, result }
  } catch (err) {
    return { error: true, code: 422, message: err.message }
  }
})
