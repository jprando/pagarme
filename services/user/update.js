module.exports = async function (id, changeUser) {
  const {
    validate,
    db: { user },
    services: { user: { password } }
  } = this

  if (changeUser.credential) {
    changeUser = {
      ...changeUser,
      credential: await password.generate(changeUser.credential)
    }
  }

  const removeCredential = user => {
    if (user) {
      delete user.credential
    }
    return user
  }

  return user.scope('withoutCredential').findByPk(id)
    .then(user => user && user.update(changeUser))
    .then(user => user && user.get({ plain: true }))
    .then(removeCredential)
    .then(user => user || { code: 404, message: 'User not found' })
}
