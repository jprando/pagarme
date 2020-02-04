module.exports = async function () {
  const { db: { user } } = this
  return user.scope('basic').findAll().map(user => user.get({ plain: true }))
}
