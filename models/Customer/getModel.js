const { informBoth, dontInformBoth } = require('./../../utils')

module.exports = Sequelize => ({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    validate: {
      notNull: { msg: 'Id is required' },
      isInt: true
    }
  },
  ukey: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    validate: {
      notEmpty: true,
      notNull: { msg: 'uKey is required' },
      isUUID: 4
    },
    references: {
      model: 'users',
      key: 'ukey'
    }
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false,
    validate: {
      notNull: { msg: 'Active is required' }
    }
  },
  cnpj: {
    type: Sequelize.STRING(15),
    validate: {
      len: [10, 14],
      notEmpty: true,
      is: /^[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{4}[0-9]{2}$/,
      cnpjAndCompanyName: informBoth(Sequelize, 'CNPJ', 'companyName', 'Company Name'),
      cnpjOrCpf: dontInformBoth(Sequelize, 'CNPJ', 'cpf', 'CPF')
    }
  },
  companyName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      companyNameAndCNPJ: informBoth(Sequelize, 'Company Name', 'cnpj', 'CNPJ'),
      companyNameOrPersonName: dontInformBoth(Sequelize, 'Company Name', 'name', 'Person Name')
    }
  },
  cpf: {
    type: Sequelize.STRING(15),
    validate: {
      len: [9, 11],
      notEmpty: true,
      is: /^[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}$/,
      cpfAndName: informBoth(Sequelize, 'CPF', 'name', 'Person Name'),
      cpfOrCnpj: dontInformBoth(Sequelize, 'CPF', 'cnpj', 'CNPJ')
    }
  },
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      cpfAndName: informBoth(Sequelize, 'Person Name', 'cpf', 'CPF'),
      personNameOrCompanyName: dontInformBoth(Sequelize, 'Person Name', 'companyName', 'Company Name')
    }
  },
  address: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: { msg: 'City is required' }
    }
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: { msg: 'State is required' }
    }
  },
  zipCode: {
    type: Sequelize.STRING(10),
    validate: {
      len: [8, 10],
      notEmpty: true
    }
  },
  complement: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  telephone: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  cellphone: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
      notNull: { msg: 'Email is required' }
    }
  }
})
