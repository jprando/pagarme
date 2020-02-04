module.exports = async function (id) {
  const { db: { user } } = this
  return user.scope('allUsers').destroy({ where: { id } })
    .then(deleted => deleted === 1)
}
