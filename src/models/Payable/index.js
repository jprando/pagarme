const { Op } = require('sequelize')
// const hooks = require('./hooks')
const scopes = require('./scopes')
const getModel = require('./getModel')

const options = {
  paranoid: true,
  // hooks,
  scopes,
  defaultScope: {
    where: { deletedAt: { [Op.is]: null } }
  }
}

module.exports = {
  register: ({ db, Sequelize }) => {
    db.define('payable', getModel(Sequelize), options)
  }
}
