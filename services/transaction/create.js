module.exports = async function (newTransaction) {
  const { db: { transaction } } = this

  let newTransactionResult = await transaction.create(newTransaction)
  newTransactionResult = newTransactionResult.get({ plain: true })

  return newTransactionResult
}
