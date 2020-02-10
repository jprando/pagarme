const auth = require('../server/middleware/auth')
const {
  postPaymentTransaction,
  getCustomerPaymentTransactions
} = require('../controllers/paymentTransaction')

module.exports = {
  config (router) {
    router.post('/transaction', auth, postPaymentTransaction)
    router.get('/transactions/customer', auth, getCustomerPaymentTransactions)
  }
}
