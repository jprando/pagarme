/// const { auth } = require('./../controllers')
const { getCustomerPayables } = require('../controllers/payable')

module.exports = {
  config (router) {
    router.get('/payables/customer/:id', auth, getCustomerPayables)
  }
}
