module.exports = Sequelize => ({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    validate: {
      isInt: true
    }
  },
  ukey: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    validate: {
      notNull: true,
      notEmpty: true,
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
    allowNull: false
  },
  cnpj: {
    type: Sequelize.STRING(15),
    validate: {
      len: [10, 14],
      notEmpty: true,
      is: /^[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{4}[0-9]{2}$/
    }
  },
  companyName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  cpf: {
    type: Sequelize.STRING(15),
    validate: {
      len: [9, 11],
      notEmpty: true,
      is: /^[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}$/
    }
  },
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
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
    validate: {
      notEmpty: true
    }
  },
  state: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
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
  referencePoint: {
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
      isEmail: true
    }
  }
})
