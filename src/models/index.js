module.exports.User = require('./User')
module.exports.Customer = require('./Customer')
module.exports.PaymentTransaction = require('./PaymentTransaction')
module.exports.Payable = require('./Payable')

module.exports = {
  register: ({ db, Sequelize }) => {
    const registerModel = model => model.register({ db, Sequelize });
    [
      this.User,
      this.Customer,
      this.PaymentTransaction,
      this.Payable
    ].forEach(registerModel)
  }
}
