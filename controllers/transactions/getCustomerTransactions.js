const { dataResponse } = require('../../utils')

module.exports = dataResponse(({
  services: { cashin: service },
  params: { id }
}) => service.search({ customer: id, page: 0 }))
