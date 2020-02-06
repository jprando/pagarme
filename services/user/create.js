module.exports = async function (newUser) {
  const { db: { user, toPlain } } = this

  const userEmailExists = await user.scope('allUsers').count({
    where: {
      email: newUser.email
    }
  })

  if (userEmailExists) {
    return { error: true, message: 'There is already a user with this email' }
  }

  const newUserResult = await user.create(newUser).then(toPlain)

  delete newUserResult.credential
  delete newUserResult.lastLoginAt
  delete newUserResult.lastPasswordChangeAt

  return newUserResult
}
