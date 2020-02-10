const dataResponse = require('../dataResponse')
const updateCustomerConstraint = require('./updateCustomer.validation')

module.exports = dataResponse(async ({
  validate,
  services: { user, customer },
  params: { id },
  body
}) => {
  const updateCustomer = validate.cleanAttributes(body, updateCustomerConstraint)
  const errors = validate(updateCustomer, updateCustomerConstraint)
  if (errors) {
    return { error: true, code: 422, errors }
  }

  const { ukey } = updateCustomer
  const userResult = await user.getByUkey(ukey)
  if (!userResult || !userResult.id) {
    return {
      error: true,
      code: 422,
      message: 'Active User with uKey informed not found'
    }
  }

  updateCustomer.id = id
  const updateCustomerResult = await customer.update(id, updateCustomer)
  const { code, error, message } = updateCustomerResult
  return {
    error: Boolean(code) || Boolean(error),
    code: code || (!error ? 200 : 422),
    message,
    result: updateCustomerResult
  }
})
