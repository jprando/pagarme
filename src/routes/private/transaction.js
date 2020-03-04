const controller = require('../../controllers/paymentTransaction')

module.exports = {
  config (router) {
    router.post('/transaction', controller.postPaymentTransaction)
    router.get('/transactions/customer', controller.getCustomerPaymentTransactions)
  }
}
