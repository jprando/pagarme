const bcrypt = require('bcrypt')

module.exports = {
  login: async function (email, password) {
    const { models: { user } } = this.db
    const result = await user.findOne({ where: { active: true, email } })
    if (result && result.credential && await bcrypt.compare(password, result.credential)) {
      return { result: 'tokensinistro' }
    }
    return { error: true, code: 401, message: 'invalid credentials' }
  }
}
