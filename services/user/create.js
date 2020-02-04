module.exports = async function (newUser) {
  const { db: { user } } = this
  return user.create(newUser)
  // const result = user.create(newUser)
  // delete result.credential
  // return result
}
