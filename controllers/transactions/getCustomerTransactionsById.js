const { dataResponse } = require('../utils')

module.exports = dataResponse(({
  services: { transaction },
  params: { id }
}) => transaction.search({ customer: id, page: 0 }))
