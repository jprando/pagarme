const password = require('./password')

module.exports = {
  password,
  login: async function (email, password) {
    const {
      db: { user },
      services: { jwt }
    } = this

    const _user_ = await user.findOne({ where: { active: true, email } })

    if (_user_ && _user_.credential && await this.password.compare(password, _user_.credential)) {
      const tokenData = {
        name: _user_.name,
        email: _user_.email
      }
      await _user_.update({ lastLoginAt: new Date() })
      return {
        // error: false,
        code: 200,
        token: jwt.sign(tokenData)
      }
    }

    return {
      error: true,
      code: 401,
      message: 'invalid credentials'
    }
  }
}
