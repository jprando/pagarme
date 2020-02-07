const auth = require('./../server/middleware/auth')
const {
  getCustomerPaymentTransactions,
  postPaymentTransaction
} = require('./../controllers/paymentTransaction')

module.exports = {
  config (router) {
    // router.get('/transactions/customer/:ukey', auth, getCustomerPaymentTransaction)
    // router.post('/transaction', auth, postPaymentTransaction)
    router.get('/transactions/customer/:ukey', auth, getCustomerPaymentTransactions)
    router.post('/transaction', auth, postPaymentTransaction)
  }
}
