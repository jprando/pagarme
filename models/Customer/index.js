const scopes = require('./scopes')
const getModel = require('./getModel')

const options = {
  scopes,
  defaultScope: {
    where: { active: true }
  },
  validate: {
    _cpfOrCNPJ () {
      if ((this.cnpj === undefined) && (this.cpf === undefined)) {
        throw new Error('CPF or CNPJ must be informed')
      }
    }
  }
}

module.exports = {
  register: ({ db, Sequelize }) => {
    db.define('customer', getModel(Sequelize), options)
  }
}
