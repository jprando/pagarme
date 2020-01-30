const payableService = require('./../services/cashout')

module.exports = {
  config (app) {
    app.get('/payable/customer/:id', (req, res) => {
      const result = payableService.search({ customer: req.params.id, page: 0 })
      const statusCode = (result.error && 400) || (result.length && 200) || 404

      res.status(statusCode).send(result).end()
    })

    app.post('/payable', (req, res) => {
      const result = payableService.save(/* req.data */)
      const statusCode = !result.error ? 200 : 400
      res.status(statusCode).send(result).end()
    })

    app.delete('/payable/:id', (req, res) => {
      const result = payableService.delete(req.params.id)
      const statusCode = !result.error ? 200 : 400
      res.status(statusCode).send(result).end()
    })
  }
}