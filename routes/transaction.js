// const { auth } = require('./../controllers')
const {
  getCustomerPaymentTransaction,
  postPaymentTransaction
} = require('./../controllers/paymentTransaction')

module.exports = {
  config (router) {
    // router.get('/transactions/customer/:ukey', auth, getCustomerPaymentTransaction)
    // router.post('/transaction', auth, postPaymentTransaction)
    router.get('/transactions/customer/:ukey', getCustomerPaymentTransaction)
    router.post('/transaction', postPaymentTransaction)
  }
}
