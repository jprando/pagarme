module.exports = async function (id) {
  const { db: { user } } = this
  const options = { attributes: { exclude: ['credential'] } }
  return user.scope('withoutCredential').findByPk(id, options)
    .then(user => (user && user.get({ plain: true })))
    .then(user => user || { code: 404, message: 'User not found' })
}
