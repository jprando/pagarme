module.exports = async function () {
  const { db: { transaction, toPlain } } = this
  return transaction.findAll().map(toPlain)
}
