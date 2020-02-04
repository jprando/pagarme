const uuidV4 = require('uuid/v4')
const getModel = require('./getModel')
const { generate: passwordGenerate } = require('./../../services/user/password')

const options = {
  hooks: {
    beforeCreate: async (user) => {
      user.ukey = uuidV4()
      user.credential = await passwordGenerate(user.credential)
    }
  },
  defaultScope: {
    where: { active: true },
    attributes: { exclude: ['credential'] }
  },
  scopes: {
    withPassword: {
      where: { active: true }
    },
    allUsers: {
      attributes: { exclude: ['credential'] }
    }
  }
}

module.exports = {
  register: ({ db, Sequelize }) => {
    db.define('user', getModel(Sequelize), options)
  }
}
