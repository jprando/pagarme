const getModel = require('./getModel')

const options = {
  validate: {
    cpfOrCNPJ () {
      if (!((this.cnpj === null) !== (this.cpf === null))) {
        throw new Error('CPF or CNPJ must be informed')
      }
    },
    cnpjAndCompanyName () {
      if ((this.cnpj === null) !== (this.companyName === null)) {
        throw new Error('CNPJ and Company Name must be informed')
      }
    },
    cpfAndName () {
      if ((this.cpf === null) !== (this.name === null)) {
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
