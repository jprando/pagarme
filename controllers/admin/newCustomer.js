const dataResponse = require('../dataResponse')
const newCustomerConstraints = require('./newCustomer.validation')

module.exports = dataResponse(async ({
  validate,
  services: { customer },
  body
}) => {
  const newCustomer = validate.cleanAttributes(body, newCustomerConstraints)
  const errors = validate(newCustomer, newCustomerConstraints)
  if (errors) {
    return { error: true, code: 422, errors }
  }
  const newCustomerResult = await customer.create(newCustomer)
  const { error, message } = newCustomerResult
  return {
    error: Boolean(error),
    code: !error ? 201 : 422,
    message,
    result: newCustomerResult
  }
})
