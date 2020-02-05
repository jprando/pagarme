// const hooks = require('./hooks')
const scopes = require('./scopes')
const getModel = require('./getModel')

const options = {
  paranoid: true,
  // hooks,
  scopes,
  defaultScope: {
    where: { deleted: false }
  }
}

module.exports = {
  register: ({ db, Sequelize }) => {
    db.define('payable', getModel(Sequelize), options)
  }
}
