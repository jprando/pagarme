module.exports = Sequelize => ({
  id: {
    type: Sequelize.BIGINT,
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
    defaultValue: Sequelize.UUIDV4,
    validate: {
      notNull: true,
      notEmpty: true,
      isUUID: 4
    }
  }

})
