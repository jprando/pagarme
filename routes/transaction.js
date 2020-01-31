const {
  getCustomerTransactionsById,
  postTransaction,
  deleteTransactionById
} = require('./../controllers/transactions')

module.exports = {
  config (router) {
    router.get('/transactions/customer/:id', getCustomerTransactionsById)
    router.post('/transaction', postTransaction)
    router.delete('/transaction/:id', deleteTransactionById)
  }
}
