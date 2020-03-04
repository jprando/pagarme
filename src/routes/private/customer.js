const controller = require('../../controllers/customer')

module.exports = {
  config (router) {
    router.get('/customer/balance', controller.getCustomerBalance)
    router.get('/customer/balance/:year', controller.getCustomerBalance)
    router.get('/customer/balance/:year/:month', controller.getCustomerBalance)
  }
}
