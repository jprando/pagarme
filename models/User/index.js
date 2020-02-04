const hooks = require('./hooks')
const scopes = require('./scopes')
const getModel = require('./getModel')

const options = {
  hooks,
  scopes,
  defaultScope: {
    where: { active: true },
    attributes: { exclude: ['credential'] }
  }
}

module.exports = {
  register: ({ db, Sequelize }) => {
    db.define('user', getModel(Sequelize), options)
  }
}
