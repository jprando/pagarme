const {
  getCustomerPayables
} = require('../controllers/payable')

module.exports = {
  config (router) {
    router.get('/payables/customer/:id', getCustomerPayables)
  }
}
