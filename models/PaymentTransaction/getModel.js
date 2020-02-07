module.exports = Sequelize => ({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    validate: {
      notNull: true,
      isInt: true
    }
  },
  ukey: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    validate: {
      notNull: true,
      isUUID: 4
    }
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: true,
      isInt: true
    }
  },
  month: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: true,
      isInt: true
    }
  },
  paymentDate: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notNull: true,
      isDate: true
    }
  },
  amount: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notNull: true,
      isDecimal: true,
      min: 0.001
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  paymentMethod: {
    type: Sequelize.ENUM('debit_card', 'credit_card'),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  cardNumber: {
    type: Sequelize.STRING(5),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isCreditCard: true
    }
  },
  cardholderName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  cardExpiration: {
    type: Sequelize.STRING(7),
    allowNull: false,
    validate: {
      notNull: true
    }
  },
  cardSecurityCode: {
    type: Sequelize.STRING(5),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isNumeric: true
    }
  }
})
