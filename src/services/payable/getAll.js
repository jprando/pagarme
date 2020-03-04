module.exports = async function () {
  const { db: { payable, toPlain } } = this
  return payable.findAll().map(toPlain)
}
