module.exports = async function () {
  const { db: { transaction, toPlain } } = this
  return transaction.findAll().map(toPlain) ||
  { error: true, code: 404, message: 'No Transactions' }
}
