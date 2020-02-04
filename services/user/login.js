module.exports = async function (email, password) {
  const {
    db: { user },
    services: { jwt }
  } = this

  const _user_ = await user.scope('activeUsers').findOne({ where: { email } })

  if (_user_ &&
      _user_.active &&
      _user_.credential &&
      await this.password.compare(password, _user_.credential)
  ) {
    return _user_.update({ lastLoginAt: new Date() })
      .then(updateResult => {
        const tokenData = {
          name: _user_.name,
          email: _user_.email
        }
        return {
          token: jwt.sign(tokenData)
        }
      })
  }
  return {
    error: true,
    code: 401,
    message: 'invalid credentials'
  }
}
