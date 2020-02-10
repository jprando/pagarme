const auth = require('../server/middleware/auth')
const { getCustomerBalance } = require('../controllers/customer')

module.exports = {
  config (router) {
    router.get('/customer/balance', auth, getCustomerBalance)
  }
}
