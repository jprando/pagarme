const dataResponse = require('../dataResponse')
const getById = require('../getById')

module.exports = dataResponse(async ({
  services: { customer },
  params: { id }
}) => getById(id, customer, 'Customer'))
