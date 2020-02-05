const hooks = require('./hooks')
const scopes = require('./scopes')
const getModel = require('./getModel')

const options = {
  paranoid: true,
  hooks,
  scopes,
  defaultScope: {
    where: { deletedAt: null }
  }
}

module.exports = {
  register: ({ db, Sequelize }) => {
    db.define('transaction', getModel(Sequelize), options)
  }
}
