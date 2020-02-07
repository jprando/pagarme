module.exports = async function (databaseTransaction,
  { personName, companyName },
  {
    ukey,
    id: paymentTransactionId,
    paymentMethod,
    paymentDate,
    amount: _amount,
    cardNumber,
    cardExpiration,
    cardholderName
  }) {
  const {
    db: { payable, toPlain }
  } = this
  const amount = Number.parseFloat(Number.parseFloat(_amount).toFixed(3))

  const isDebitCardPayment = paymentMethod === 'debit_card'
  const status = isDebitCardPayment ? 'paid' : 'waiting_funds'
  const summaryCard = `${cardNumber} ${cardExpiration} ${cardholderName}`
  const customerName = personName || companyName

  let payableDate = new Date()
  if (!isDebitCardPayment) {
    payableDate.setDate(paymentDate.getDate() + 1)
  }

  const payableYear = payableDate.getUTCFullYear()
  const payableMonth = payableDate.getUTCMonth() + 1
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
  const options = { transaction: databaseTransaction }
  const newPayableResult = await payable.create(newPayable, options).then(toPlain)
  newPayableResult.amount = Number.parseFloat(newPayableResult.amount)
  newPayableResult.fee = Number.parseFloat(newPayableResult.fee)
  newPayableResult.netAmount = Number.parseFloat(newPayableResult.netAmount)

  // return newPayableResult
  return newPayableResult
}
