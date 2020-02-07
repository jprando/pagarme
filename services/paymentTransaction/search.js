module.exports = async function ({ ukey = null, page = 0 }) {
  const { db: { transaction, toPlain } } = this
  return ukey && transaction.findAll({ where: { ukey } }).map(toPlain)
}
