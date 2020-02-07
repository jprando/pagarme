const extractLastFour = value => '*' + value.split('').splice(-4).join('')

module.exports = {
  beforeValidate: async (newPaymentTransaction) => {
    newPaymentTransaction.paymentDate = new Date(newPaymentTransaction.paymentDate)
    newPaymentTransaction.year = newPaymentTransaction.paymentDate.getUTCFullYear()
    newPaymentTransaction.month = newPaymentTransaction.paymentDate.getUTCMonth()
    newPaymentTransaction.month++
  },
  beforeCreate: async (newPaymentTransaction) => {
    newPaymentTransaction.cardNumber = extractLastFour(newPaymentTransaction.cardNumber)
  },
  beforeUpdate: async (paymentTransaction) => {
    paymentTransaction.cardNumber = extractLastFour(paymentTransaction.cardNumber)
  }
}
