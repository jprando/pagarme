module.exports = async function () {
  const { db: { customer, toPlain } } = this
  return customer.scope('basic')
    .findAll()
    .map(toPlain)
}
