const { dataResponse } = require('../../utils')

module.exports = dataResponse(({
  services: { cashin: service },
  params: { id }
}) => service.delete(id))
