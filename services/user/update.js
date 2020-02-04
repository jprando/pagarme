module.exports = async function (id, changeUser) {
  const { db: { user } } = this

  return user.scope('withoutCredential').findByPk(id)
    .then(user => user && user.update(changeUser))
    .then(user => user && user.get({ plain: true }))
    .then(this.removeCredential)
    .then(user => user || { code: 404, message: 'User not found' })
}
