const service = require('./../services/cashin')
const { dataResponse } = require('./../utils')

module.exports = {
  geCustomerById: dataResponse((req, res) => service.search({ customer: req.params.id, page: 0 })),
  postTransaction: dataResponse((req, res) => service.save(/* req.data */)),
  deleteTransactionById: dataResponse((req, res) => service.delete(req.params.id))
}
