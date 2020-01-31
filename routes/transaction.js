const transactionService = require('./../services/cashin')

module.exports = {
  config (router) {
    router.get('/transactions/customer/:id', (req, res) => {
      const result = transactionService.search({ customer: req.params.id, page: 0 })
      const statusCode = (result.error && 400) || (result.length && 200) || 404

      res.status(statusCode).send(result).end()
    })

    router.post('/transaction', (req, res) => {
      const result = transactionService.save(/* req.data */)
      const statusCode = !result.error ? 200 : 400
      res.status(statusCode).send(result).end()
    })

    router.delete('/transaction/:id', (req, res) => {
      const result = transactionService.delete(req.params.id)
      const statusCode = !result.error ? 200 : 400
      res.status(statusCode).send(result).end()
    })
  }
}