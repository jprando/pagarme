const { dataResponse } = require('../../utils')
const getAll = require('./../getAll')

module.exports = dataResponse(async ({
  services: { customer }
}) => getAll(customer, 'Customers'))
