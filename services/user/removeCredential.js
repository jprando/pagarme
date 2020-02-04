module.exports = user => {
  if (user) {
    delete user.credential
  }
  return user
}
