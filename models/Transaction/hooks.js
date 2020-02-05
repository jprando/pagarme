const extractLastFour = value => value.split('').splice(-4).join('')

module.exports = {
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
