module.exports = async function () {
  const { db: { user } } = this
  return user.findAll({
    attributes: Object.keys(user.tableAttributes).filter(f => f !== 'credential')
  })
}
