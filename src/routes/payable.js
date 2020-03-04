const auth = require('../server/middleware/auth')
const {
  getCustomerPayables
} = require('../controllers/payable')

module.exports = {
  config (router) {
    router.get('/payables/customer', auth, getCustomerPayables)
  }
}
