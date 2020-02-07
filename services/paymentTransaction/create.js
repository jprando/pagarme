module.exports = async function (newPaymentTransaction) {
  const {
    services: { payable },
    db
  } = this

  const newPaymentTransactionResult = db.transaction(trans => {
    return db.paymentTransaction.create(newPaymentTransaction, { transaction: trans })
      .then(payable.createByPaymentTransaction(trans))
  }).then(db.toPlain)

  // let newTransactionResult = await transaction
  //   .create(newTransaction)
  //   .then(toPlain)

  return newPaymentTransactionResult
}
