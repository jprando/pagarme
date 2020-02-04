const { dataResponse } = require('../../utils')

module.exports = dataResponse(({
  services: { cashout: service },
  params: { id }
}) => service.delete(id))
