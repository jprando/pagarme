module.exports = async function () {
  const { db: { user } } = this
  return user.findAll({
    attributes: [
      'id',
      'name',
      'email',
      'active',
      'ukey',
      'lastLoginAt',
      'lastPasswordChangeAt',
      'createdAt',
      'updatedAt'
    ]
  })
}
