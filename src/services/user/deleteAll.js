module.exports = async function (id) {
  const { db: { user } } = this
  return user.scope('allUsers').destroy({ where: { } })
    .then((deleted, errors) => errors !== undefined)
}
