module.exports = async function () {
  const { db: { user, toPlain } } = this
  return user.scope('basic')
    .findAll()
    .map(toPlain)
}
