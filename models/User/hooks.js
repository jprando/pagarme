const uuidV4 = require('uuid/v4')
const { generate: passwordGenerate } = require('./../../services/user/password')

module.exports = {
  beforeCreate: async (user) => {
    user.ukey = uuidV4()
    user.credential = await passwordGenerate(user.credential)
  },
  beforeUpdate: async (user) => {
    if (user.credential) {
      user.credential = await passwordGenerate(user.credential)
    }
  }
}
