const { dataResponse } = require('../../utils')

module.exports = dataResponse(({
  services: { cashout: service },
  params: { id }
}) => service.getCustomerPayables({ customer: id, page: 0 }))
