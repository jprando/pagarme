const { dataResponse } = require('../../utils')
const newCustomerConstraints = require('./newCustomer.validation')

module.exports = dataResponse(async ({
  validate,
  services: { customer },
  body
}) => {
  const newCustomer = validate.cleanAttributes(body, newCustomerConstraints)
  const errors = validate(newCustomer, newCustomerConstraints)
  return !errors
    ? customer.create(newCustomer)
    : { error: true, code: 400, errors }
})
