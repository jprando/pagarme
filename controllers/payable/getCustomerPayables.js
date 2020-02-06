const { dataResponse } = require('../../utils')

module.exports = dataResponse(({
  services: { payable },
  params: { id }
}) => payable.getCustomerPayables({ customer: id, page: 0 }))
