const { loadModule } = require('../utils')

module.exports = {
  register: ({ db, Sequelize }) => {
    const registerModel = model => model.register({ db, Sequelize });
    [
      './User',
      './Customer',
      './PaymentTransaction',
      './Payable'
    ].map(loadModule.base(__dirname)).forEach(registerModel)
  }
}
