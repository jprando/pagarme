const auth = require('../server/middleware/auth')
const {
  getCustomerPayables,
  getCustomerPayablesBalance
} = require('../controllers/payable')

module.exports = {
  config (router) {
    router.get('/payables/customer', auth, getCustomerPayables)
    router.get('/payables/customer/balance', auth, getCustomerPayablesBalance)
  }
}
