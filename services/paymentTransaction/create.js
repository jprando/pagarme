const { ValidationError } = require('sequelize')
const { extractLastFour } = require('./../../utils')

module.exports = async function (newPaymentTransaction) {
  const {
    db: { transaction, customer, paymentTransaction, toPlain },
    services: { payable }
  } = this

  const { ukey } = newPaymentTransaction
  const customerResult = await customer
    .findOne({ where: { ukey } })
    .then(toPlain)

  if (!customerResult) {
    throw new ValidationError('Customer not found')
  }

  const { paymentDate, amount, cardholderName, cardExpiration, cardSecurityCode } = newPaymentTransaction
  const cardNumber = extractLastFour(newPaymentTransaction.cardNumber)
  const alreadyExists = await paymentTransaction.findOne({
    where: { ukey, paymentDate, amount, cardNumber, cardholderName, cardExpiration, cardSecurityCode }
  }).then(toPlain)

  if(alreadyExists) {
    throw new ValidationError('Payment transaction already exists')
  }

  const customerName = customerResult.personName || customerResult.companyName

  let trans
  try {
    trans = await transaction()

    newPaymentTransaction.transactionId = trans.id
    newPaymentTransaction.customerName = customerName
    const newPaymentTransactionResult = await paymentTransaction
      .create(newPaymentTransaction, { transaction: trans }).then(toPlain)

    const newPayableResult = await payable
      .createByPaymentTransaction(trans, customerResult, newPaymentTransactionResult)

    await trans.commit()

    delete newPaymentTransactionResult.id
    delete newPayableResult.id
    delete newPayableResult.ukey
    delete newPayableResult.paymentTransactionId
    delete newPayableResult.transactionId
    delete newPayableResult.customerName
    delete newPayableResult.paymentDate
    delete newPayableResult.paymentMethod
    delete newPayableResult.payableYear
    delete newPayableResult.payableMonth
    delete newPayableResult.updatedAt
    delete newPayableResult.createdAt

    newPaymentTransactionResult.payable = newPayableResult
    return newPaymentTransactionResult
  } catch (err) {
    if (trans) await trans.rollback()
    throw err
  }
}
