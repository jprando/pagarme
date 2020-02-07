module.exports = async function ({ ukey = null, page = 0 }) {
  const { db: { paymentTransaction, toPlain } } = this
  return ukey && paymentTransaction.findAll({ where: { ukey } }).map(toPlain)
}
