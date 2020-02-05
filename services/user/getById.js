module.exports = async function (id) {
  const { db: { user, toPlain } } = this
  return user.scope('withoutCredential')
    .findByPk(id)
    .then(toPlain)
}
