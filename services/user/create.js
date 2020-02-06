module.exports = async function (newUser) {
  const { db: { user } } = this

  const userEmailExists = await user.scope('allUsers').count({
    where: {
      email: newUser.email
    }
  })

  if (userEmailExists) {
    return { error: true, message: 'There is already a user with this email' }
  }

  let newUserResult = await user.create(newUser)
  newUserResult = newUserResult.get({ plain: true })

  delete newUserResult.credential
  delete newUserResult.lastLoginAt
  delete newUserResult.lastPasswordChangeAt

  return newUserResult
}
