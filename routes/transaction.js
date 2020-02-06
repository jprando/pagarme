const {
  getCustomerTransactions,
  postTransaction
} = require('./../controllers/transaction')

module.exports = {
  config (router) {
    router.get('/transactions/customer/:ukey', getCustomerTransactions)
    router.post('/transaction', postTransaction)
  }
}
