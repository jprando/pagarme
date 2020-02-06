const extractLastFour = value => value.split('').splice(-4).join('')

module.exports = {
  beforeValidate: async (transaction) => {
    transaction.year = new Date(transaction.paymentDate).year
    transaction.month = new Date(transaction.paymentDate).month
  },
  beforeCreate: async (transaction) => {
    transaction.cardNumber = extractLastFour(transaction.cardNumber)
  },
  afterCreate: async (transaction) => {
    /// criar os payables
  },
  beforeUpdate: async (transaction) => {
    transaction.cardNumber = extractLastFour(transaction.cardNumber)
  }
}
