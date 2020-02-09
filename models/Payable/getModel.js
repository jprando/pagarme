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
  transactionId: {
    type: Sequelize.UUID,
    allowNull: false,
    validate: {
      notNull: true,
      isUUID: 4
    }
  },
  customerName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  status: {
    type: Sequelize.ENUM('paid', 'waiting_funds'),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
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
  paymentMethod: {
    type: Sequelize.ENUM('debit_card', 'credit_card'),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  summaryCard: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  payableYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: true,
      isInt: true
    }
  },
  payableMonth: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: true,
      isInt: true
    }
  },
  payableDate: {
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
  fee: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notNull: true,
      isDecimal: true,
      min: 0.001
    }
  },
  netAmount: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notNull: true,
      isDecimal: true,
      min: 0.001
    }
  }
})
