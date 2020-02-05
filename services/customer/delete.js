module.exports = async function (id) {
  const { db: { customer } } = this
  return customer.destroy({ where: { id } })
    .then(deleted => deleted === 1)
}
