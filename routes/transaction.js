const {
  getCustomerTransactions,
  postTransaction,
  deleteTransaction
} = require('./../controllers/transactions')

module.exports = {
  config (router) {
    router.get('/transactions/customer/:id', getCustomerTransactions)
    router.post('/transaction', postTransaction)
    router.delete('/transaction/:id', deleteTransaction)
  }
}
