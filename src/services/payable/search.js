module.exports = async function ({ ukey = null, page = 0 }) {
  const { db: { payable, toPlain } } = this
  return ukey && payable.findAll({ where: { ukey } }).map(toPlain)
}
