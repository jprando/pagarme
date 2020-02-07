const { ValidationError } = require('sequelize')

module.exports = async function (newPaymentTransaction) {
  const {
    // app: { db: { transaction } },
    db: { transaction, customer, paymentTransaction, toPlain },
    // db: { customer, paymentTransaction, toPlain },
    services: { payable }
  } = this

  const { ukey } = newPaymentTransaction
  const customerResult = await customer
    .findOne({ where: { ukey } })
    .then(toPlain)

  if (!customerResult) {
    throw new ValidationError('Customer not found')
  }

  let trans
  try {
    trans = await transaction()

    const newPaymentTransactionResult = await paymentTransaction
      .create(newPaymentTransaction, { transaction: trans }).then(toPlain)
    // .create(newPaymentTransaction)
    const newPayableResult = await payable
      .createByPaymentTransaction(trans, customerResult, newPaymentTransactionResult)

    await trans.commit()

    delete newPaymentTransactionResult.id
    delete newPayableResult.id
    delete newPayableResult.ukey
    delete newPayableResult.paymentTransactionId
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
