module.exports = async function () {
  const { db: { user, toPlain } } = this
  return user.scope('basic')
    .findAll()
    .map(toPlain) || { error: true, code: 404, message: 'No Users' }
}
