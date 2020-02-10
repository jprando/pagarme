const dataResponse = require('../dataResponse')
const deleteById = require('../deleteById')

module.exports = dataResponse(async ({
  services: { customer },
  params: { id }
}) => deleteById(id, customer, 'Customer'))
