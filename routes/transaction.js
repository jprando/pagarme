const {
  geCustomerById,
  postTransaction,
  deleteTransactionById
} = require('./../controllers/transactions')

module.exports = {
  config (router) {
    router.get('/transactions/customer/:id', geCustomerById)
    router.post('/transaction', postTransaction)
    router.delete('/transaction/:id', deleteTransactionById)
  }
}
