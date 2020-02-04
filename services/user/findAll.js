module.exports = async function () {
  const { db: { user } } = this
  return user.findAll()
}
