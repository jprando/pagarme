module.exports = function (databaseTransaction) {
  const {
    db: { customer, payable, toPlain }
  } = this
  return async paymentTransaction => {
    const {
      ukey,
      id: paymentTransactionId,
      paymentMethod,
      paymentDate,
      amount,
      cardNumber,
      cardExpiration,
      cardholderName
    } = paymentTransaction

    const customerResult = customer.findOne({ where: { ukey } }).then(toPlain)
    const isDebitCardPayment = paymentMethod === 'debit_card'
    const status = isDebitCardPayment ? 'paid' : 'waiting_funds'
    const summaryCard = `${cardNumber} ${cardExpiration} ${cardholderName}`
    const customerName = customerResult.name || customerResult.companyName
    const payableDate = isDebitCardPayment ? paymentDate : paymentDate.setDate(paymentDate.getDate() + 1)
    const payableYear = payableDate.getUTCFullYear()
    const payableMonth = payableDate.getUTCMonth()
    const fee = isDebitCardPayment ? 0.03 : 0.05
    const netAmount = amount - (amount * fee)

    const newPayable = {
      ukey,
      paymentTransactionId,
      customerName,
      status,
      summaryCard,
      paymentDate,
      paymentMethod,
      payableYear,
      payableMonth,
      payableDate,
      amount,
      fee,
      netAmount
    }
    return payable.create(newPayable).then(toPlain)
  }
}
