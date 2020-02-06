const { dataResponse } = require('../../utils')

module.exports = dataResponse(({
  services: { cashin },
  params: { id }
}) => cashin.search({ customer: id, page: 0 }))
