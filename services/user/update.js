module.exports = async function (id, changeUser) {
  const { db: { user, toPlain } } = this
  changeUser.id = id
  return user.scope('withoutCredential').findByPk(id)
    .then(user => user && user.update(changeUser))
    .then(toPlain)
    .then(this.removeCredential)
    .then(user => user || { code: 404, message: 'User not found' })
}
