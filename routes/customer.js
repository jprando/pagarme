const auth = require('../server/middleware/auth')
const { getCustomerBalance } = require('../controllers/customer')

module.exports = {
  config (router) {
    router.get('/customer/balance', auth, getCustomerBalance)
    router.get('/customer/balance/:year', auth, getCustomerBalance)
    router.get('/customer/balance/:year/:month', auth, getCustomerBalance)
  }
}
