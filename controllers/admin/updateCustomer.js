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
  return !errors
    ? customer.update(id, body)
    : { error: true, code: 400, errors }
})
