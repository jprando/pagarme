const scopes = require('./scopes')
const getModel = require('./getModel')

const options = {
  scopes,
  defaultScope: {
    where: { active: true }
  },
  validate: {
    cpfOrCNPJ () {
      if ((this.cnpj === undefined) && (this.cpf === undefined)) {
        throw new Error('CPF or CNPJ must be informed')
      }
    },
    cnpjAndCompanyName () {
      if ((this.cnpj === undefined) !== (this.companyName === undefined)) {
        throw new Error('CNPJ and Company Name must be informed')
      }
    },
    cpfAndName () {
      if ((this.cpf === undefined) !== (this.name === undefined)) {
        throw new Error('CPF and Name must be informed')
      }
    }
  }
}

module.exports = {
  register: ({ db, Sequelize }) => {
    db.define('customer', getModel(Sequelize), options)
  }
}
