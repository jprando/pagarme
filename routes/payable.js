const {
  getCustomerPayables,
  postPayable,
  deletePayable
} = require('../controllers/payables')

module.exports = {
  config (router) {
    router.get('/payables/customer/:id', getCustomerPayables)
    router.post('/payable', postPayable)
    router.delete('/payable/:id', deletePayable)
  }
}
