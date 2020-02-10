const dataResponse = require('../dataResponse')
const getAll = require('../getData')
const constraints = require('./getCustomerPayables.validation')

module.exports = dataResponse(async ({
  validate,
  services: { payable },
  params: { ukey, page = 0 }
}) => {
  const errors = validate({ ukey, page }, constraints)
  if (errors) {
    return { error: true, code: 422, errors }
  }
  const result = await getAll(payable, 'Transactions', 'search', { ukey, page })

  if (result.error) {
    return result
  }

  return result.map(payableItem => {
    delete payableItem.id
    delete payableItem.paymentTransactionId
    delete payableItem.payableYear
    delete payableItem.payableMonth
    delete payableItem.updatedAt

    payableItem.amount = Number.parseFloat(payableItem.amount)
    payableItem.fee = Number.parseFloat(payableItem.fee)
    payableItem.netAmount = Number.parseFloat(payableItem.netAmount)

    return payableItem
  })
})
