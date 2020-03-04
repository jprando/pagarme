module.exports = async function (ukey) {
  const { db: { user, toPlain } } = this
  return user.scope('basic')
    .findOne({ where: { ukey } })
    .then(toPlain)
}
