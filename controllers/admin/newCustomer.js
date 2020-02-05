const { dataResponse } = require('../../utils')
const newCustomerConstraints = require('./newCustomer.validation')

module.exports = dataResponse(async ({
  validate,
  services: { customer },
  body
}) => {
  const newCustomer = validate.cleanAttributes(body, newCustomerConstraints)
  const errors = validate(newCustomer, newCustomerConstraints)
  if (errors) {
    return { error: true, code: 400, errors }
  }
  return customer.create(newCustomer)
})
