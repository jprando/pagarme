const { dataResponse } = require('../../utils')

module.exports = dataResponse(({
  services: { cashout: service },
  params
}) => service.save(params))
