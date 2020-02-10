const auth = require('../server/middleware/auth')
const {
  postPaymentTransaction,
  getCustomerPaymentTransactions,
  getCustomerPaymentTransactionsBalance
} = require('../controllers/paymentTransaction')

module.exports = {
  config (router) {
    router.post('/transaction', auth, postPaymentTransaction)
    router.get('/transactions/customer', auth, getCustomerPaymentTransactions)
    router.get('/transactions/customer/balance', auth, getCustomerPaymentTransactionsBalance)
  }
}
