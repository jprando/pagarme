module.exports = async function (email) {
  const { db: { user, toPlain } } = this
  return user.scope('ukeyOnly')
    .findOne({ where: { email } })
    .then(toPlain)
    .then(userData => userData.ukey)
}
