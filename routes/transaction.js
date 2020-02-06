const {
  getAllTransactions,
  getCustomerTransactions,
  postTransaction
} = require('./../controllers/transaction')

module.exports = {
  config (router) {
    router.get('/transactions', getAllTransactions)
    router.get('/transactions/customer/:id', getCustomerTransactions)
    router.post('/transaction', postTransaction)
  }
}
