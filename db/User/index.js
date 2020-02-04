const uuidV4 = require('uuid/v4')
const getModel = require('./getModel')
const { generate: passwordGenerate } = require('./../../services/user/password')

const options = {
  hooks: {
    beforeCreate: async (user) => {
      user.ukey = uuidV4()
      user.credential = await passwordGenerate(user.credential)
    }
  }
}

module.exports = {
  register: ({ db, Sequelize }) => {
    db.define('user', getModel(Sequelize), options)
  }
}
