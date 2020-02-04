const {
  getCustomerTransactions,
  postTransaction,
  deleteTransaction
} = require('./../controllers/transaction')

module.exports = {
  config (router) {
    router.get('/transactions/customer/:id', getCustomerTransactions)
    router.post('/transaction', postTransaction)
    router.delete('/transaction/:id', deleteTransaction)
  }
}
