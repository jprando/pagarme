const { dataResponse } = require('../../utils')
const updateCustomerConstraint = require('./updateCustomer.validation')

module.exports = dataResponse(async ({
  validate,
  services: { customer },
  params: { id },
  body
}) => {
  const updateCustomer = validate.cleanAttributes(body, updateCustomerConstraint)
  const errors = validate(updateCustomer, updateCustomerConstraint)
  if (errors) {
    return { error: true, code: 400, errors }
  }
  return customer.update(id, body)
})
