module.exports = async function (id) {
  const { db: { customer, toPlain } } = this
  return customer.findByPk(id).then(toPlain)
}
