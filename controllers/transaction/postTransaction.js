const { dataResponse } = require('../../utils')
const newTransactionConstraints = require('./postTransaction.validation')

module.exports = dataResponse(async ({
  validate,
  services: { transaction },
  body
}) => {
  newTransactionConstraints.cardNumber.length = function (value, attributes, attributeName, options, constraints) {
    if (value) {
      // Amex
      if ((/^(34|37).*$/).test(value)) return { is: 15 }
      // Visa, Mastercard
      if ((/^(4|5[1-5]).*$/).test(value)) return { is: 16 }
    }
    // Unknown card, don't validate length
    return false
  }

  const newTransaction = validate.cleanAttributes(body, newTransactionConstraints)

  newTransaction.paymentDate = new Date(newTransaction.paymentDate)
  newTransaction.year = newTransaction.paymentDate.getUTCFullYear()
  newTransaction.month = newTransaction.paymentDate.getUTCMonth() + 1

  const errors = validate(newTransaction, newTransactionConstraints)
  return !errors
    ? { error: false, code: 201, result: await transaction.create(newTransaction) }
    : { error: true, code: 400, errors }
})
