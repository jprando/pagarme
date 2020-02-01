const { dataResponse } = require('../../utils')

module.exports = dataResponse(({
  services: { cashin: service },
  params
}) => service.save(params))
