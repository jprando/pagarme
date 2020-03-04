const controller = require('../../controllers/payable')

module.exports = {
  config (router) {
    router.get('/payables/customer', controller.getCustomerPayables)
  }
}
