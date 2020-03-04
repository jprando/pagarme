module.exports = async function (id, changeCustomer) {
  const { db: { customer, toPlain } } = this
  changeCustomer.id = id
  return customer.findByPk(id)
    .then(customer => customer && customer.update(changeCustomer))
    .then(toPlain)
    .then(customer => customer || { code: 404, message: 'Customer not found' })
}
