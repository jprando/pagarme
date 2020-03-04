module.exports = async function () {
  const { db: { paymentTransaction, toPlain } } = this
  return paymentTransaction.findAll().map(toPlain)
}
