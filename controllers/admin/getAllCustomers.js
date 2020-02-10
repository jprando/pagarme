const dataResponse = require('../dataResponse')
const getData = require('../getData')

module.exports = dataResponse(async ({
  services: { customer }
}) => getData(customer, 'Customers'))
