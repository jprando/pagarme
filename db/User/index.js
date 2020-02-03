const { generate: passwordGenerate } = require('./../../services/user/password')

module.exports = {
  register: ({ db, Sequelize }) => {
    db.define('user', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
          isInt: true
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          isEmail: true
        }
      },
      credential: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
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
      lastLoginAt: {
        type: Sequelize.DATE,
        allowNull: true,
        validate: {
          isDate: true,
          isAfter: '2020-02-02',
          customValidator (value) {
            if (new Date(value) > new Date()) {
              throw new Error('LastLoginAt cannot be a date in the future')
            }
          }
        }
      },
      lastPasswordChangeAt: {
        type: Sequelize.DATE,
        allowNull: true,
        validate: {
          isDate: true,
          isAfter: '2020-02-02',
          customValidator (value) {
            if (new Date(value) > new Date()) {
              throw new Error('LastPasswordChangeAt cannot be a date in the future')
            }
          }
        }
      }
    }, {
      hooks: {
        beforeCreate: async (user) => {
          user.credential = await passwordGenerate(user.credential)
        }
      }
    })
  }
}
