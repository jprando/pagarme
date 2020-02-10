const uuidV4 = require('uuid/v4')
const { generate: passwordGenerate } = require('../../services/user/password')
const { generateCredentialText } = require('../../services/user')

module.exports = {
  beforeCreate: async (user) => {
    user.ukey = uuidV4()
    const credentialText = generateCredentialText(user)
    user.credential = await passwordGenerate(credentialText)
  },
  beforeUpdate: async (user) => {
    if (user.credential) {
      const credentialText = generateCredentialText(user)
      user.credential = await passwordGenerate(credentialText)
    }
  }
}
